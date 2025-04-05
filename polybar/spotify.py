#!/usr/bin/env python3

import sys
import dbus
import argparse
import subprocess
from shutil import which

def apply_rtl(text):
    """Apply RTL text conversion using fribidi"""
    try:
        if not text or not which('fribidi'):
            return text
            
        proc = subprocess.Popen(
            ['fribidi', '--nobreak'],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            universal_newlines=True
        )
        stdout, _ = proc.communicate(input=text)
        return stdout.strip()
    except:
        return text

parser = argparse.ArgumentParser()
parser.add_argument(
    '-t',
    '--trunclen',
    type=int,
    metavar='trunclen'
)
parser.add_argument(
    '-f',
    '--format',
    type=str,
    metavar='custom format',
    dest='custom_format'
)
args = parser.parse_args()

# Default parameters
output = '{artist}: {song}'
trunclen = 80

# Parameters can be overwritten by args
if args.trunclen is not None:
    trunclen = args.trunclen
if args.custom_format is not None:
    output = args.custom_format

try:
    session_bus = dbus.SessionBus()
    spotify_bus = session_bus.get_object(
        'org.mpris.MediaPlayer2.spotify',
        '/org/mpris/MediaPlayer2'
    )

    spotify_properties = dbus.Interface(
        spotify_bus,
        'org.freedesktop.DBus.Properties'
    )

    metadata = spotify_properties.Get('org.mpris.MediaPlayer2.Player', 'Metadata')

    # Apply RTL processing to both artist and song
    artist = apply_rtl(metadata['xesam:artist'][0])
    song = apply_rtl(metadata['xesam:title'])

    if len(song) > trunclen:
        song = song[0:trunclen]
        song += '...' 
        if ('(' in song) and (')' not in song):
            song += ')'
    
    # Add explicit RTL markers and print
    formatted = output.format(artist=artist, song=song)
    print('\u202B' + formatted + '\u202C')  # Unicode RTL markers

except Exception as e:
    if isinstance(e, dbus.exceptions.DBusException):
        # Fallback to RTL window title
        try:
            rtl_output = subprocess.check_output(
                ["~/.config/polybar/rtl-window-title.sh"],
                stderr=subprocess.DEVNULL,
                timeout=0.5
            ).decode().strip()
            print('\u202B' + apply_rtl(rtl_output) + '\u202C')
        except subprocess.CalledProcessError:
            print('')
    else:
        print(str(e))
