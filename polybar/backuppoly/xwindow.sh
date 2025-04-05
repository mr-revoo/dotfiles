
#!/bin/bash
# Fetch the active window ID
window_id=$(xdotool getactivewindow)

# Get the window title directly using xprop
title=$(xprop -id "$window_id" _NET_WM_NAME | sed -n 's/^.* = "\(.*\)"$/\1/p')

# Process the title for RTL and shaping
if [[ -n "$title" ]]; then
    rtl_title=$(echo "$title" | fribidi )
    echo "$rtl_title"
else
    echo "i3"
fi

