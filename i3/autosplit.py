#!/usr/bin/env python3

import i3ipc

i3 = i3ipc.Connection()

def auto_split(i3, e):
    focused = i3.get_tree().find_focused()
    parent = focused.parent

    tiled = [n for n in parent.nodes if n.type == 'con' and not n.floating]

    if len(tiled) % 2 == 0:
        i3.command('split horizontal')
    else:
        i3.command('split vertical')

i3.on("window::new", auto_split)
i3.main()

