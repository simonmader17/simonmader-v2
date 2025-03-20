#!/usr/bin/env bash

# This script generates favicons according to
# https://stackoverflow.com/questions/48956465/favicon-standard-2024-svg-ico-png-and-dimensions
# based on my github profile picture.

dir="$(dirname "$0")"
tmpfile="$(mktemp)"

wget https://github.com/simonmader17.png -O "$tmpfile"

# iOS Safari
magick "$tmpfile" -resize 180x180 "$dir/public/icons/apple-touch-icon.png"

# Classic desktop browsers
magick "$tmpfile" -resize 32x32 "$dir/public/icons/favicon-32x32.png"
magick "$tmpfile" -resize 16x16 "$dir/public/icons/favicon-16x16.png"
magick "$tmpfile" -background transparent -define icon:auto-resize=16,32,48 "$dir/public/icons/favicon.ico"
