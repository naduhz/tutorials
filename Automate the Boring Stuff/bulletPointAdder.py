#! python3
# This program pastes text and adds a * and a space for every new line.

import pyperclip

text = pyperclip.paste()

# Separates lines and adds stars
lines = text.split("\n")  # This returns a list containing every individual line.
for i in range(len(lines)):  # Loop through all indexes in the 'lines' list.
    lines[i] = (
        "* " + lines[i]
    )  # Add a * and space to each index(string) in the 'lines' list.

text = "\n".join(
    lines
)  # Adds a linebreak between every index(string) in the 'lines' list.

pyperclip.copy(text)