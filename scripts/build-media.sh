#!/usr/bin/env bash
# Turns media-src/ into web-ready assets in public/.
# Photos -> AVIF + WebP at 640/1200/2000w. Videos -> muted H.264 loops + poster.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=media-src; OUT=public

mkdir -p "$OUT/images"
for f in "$SRC"/photos/*.jpg; do
  name=$(basename "$f" .jpg)
  for w in 640 1200 2000; do
    webp="$OUT/images/$name-$w.webp"; avif="$OUT/images/$name-$w.avif"
    [[ -f $webp && -f $avif ]] && continue
    tmp=$(mktemp -t zimg).png
    sips -Z $w -s format png "$f" --out "$tmp" >/dev/null
    # sips -Z bounds the longest side; recompute so the *width* is $w
    read -r pw ph < <(sips -g pixelWidth -g pixelHeight "$tmp" | awk '/pixel/{print $2}' | xargs)
    if (( pw < w && ph > pw )); then sips --resampleWidth $w "$f" -s format png --out "$tmp" >/dev/null; fi
    cwebp -quiet -q 78 "$tmp" -o "$webp"
    avifenc -q 55 -s 6 "$tmp" "$avif" >/dev/null
    rm -f "$tmp"
  done
done

# Background loops: name.mp4 in media-src/video -> 1280w, 10s, no audio
mkdir -p "$OUT/video"
for f in "$SRC"/video/*.mp4; do
  [[ -e $f ]] || continue
  name=$(basename "$f" .mp4); out="$OUT/video/$name.mp4"
  [[ -f $out ]] && continue
  start=${START_AT:-3}
  ffmpeg -loglevel error -y -ss "$start" -t 10 -i "$f" -an \
    -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$out"
  ffmpeg -loglevel error -y -ss 1 -i "$out" -frames:v 1 -vf scale=1600:-2 "$OUT/video/$name.jpg"
  cwebp -quiet -q 75 "$OUT/video/$name.jpg" -o "$OUT/video/$name.webp" && rm "$OUT/video/$name.jpg"
done

# Reels: vertical 720w, max 30s, keeps audio (user taps to unmute)
mkdir -p "$OUT/reels"
for f in "$SRC"/reels/*.mp4; do
  [[ -e $f ]] || continue
  name=$(basename "$f" .mp4); out="$OUT/reels/$name.mp4"
  [[ -f $out ]] && continue
  ffmpeg -loglevel error -y -i "$f" -t 30 \
    -vf "scale=720:-2,fps=30" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
    -c:a aac -b:a 96k -movflags +faststart "$out"
  ffmpeg -loglevel error -y -ss 2 -i "$out" -frames:v 1 "$OUT/reels/$name.jpg"
  cwebp -quiet -q 75 "$OUT/reels/$name.jpg" -o "$OUT/reels/$name.webp" && rm "$OUT/reels/$name.jpg"
done
echo "media done"

# Aspect-ratio manifest so <Img> can reserve space (no layout shift)
{
  echo "{"
  first=1
  for f in "$SRC"/photos/*.jpg; do
    read -r w h < <(sips -g pixelWidth -g pixelHeight "$f" | awk '/pixel/{print $2}' | xargs)
    [[ $first == 1 ]] || echo ","
    printf '  "%s": [%s, %s]' "$(basename "$f" .jpg)" "$w" "$h"; first=0
  done
  echo; echo "}"
} > src/data/images.json
