#! python3

# mapIt.py - Automatically launches an address to Google Maps using the command line or contents of the clipboard.

import webbrowser, sys, pyperclip

if len(sys.argv) > 1:
    # Get address from command line
    address = "".join(sys.argv[1:])
else:
    # Get address from clipboard
    address = pyperclip.paste()

webbrowser.open("https://www.google.com/maps/place/" + address)
