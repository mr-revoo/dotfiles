#!/bin/bash

# Get the window title using xdotool
window_title=$(xdotool getwindowfocus getwindowname)

# Process the title with fribidi to handle RTL text
if [ -n "$window_title" ]; then
    echo "$window_title" | fribidi
else
    echo "Empty"
fi

