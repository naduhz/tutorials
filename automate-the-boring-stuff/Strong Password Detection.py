#! python3
# This program scans passwords and determines if they are strong,
# i.e. at least 8 characters long, contains both upper and
# lowercase characters, and has at least one digit.

import re

password = str(input("Please enter your password: "))

uppercaseRegex = re.compile(r"[A-Z]")
lowercaseRegex = re.compile(r"[a-z]")
digitRegex = re.compile(r"[0-9]")

if len(password) < 8:
    print("Sorry, your password needs at least 8 characters.")
elif len(uppercaseRegex.findall(password)) == 0:
    print("Sorry, your password needs to contain at least 1 uppercase character.")
elif len(lowercaseRegex.findall(password)) == 0:
    print("Sorry, your password needs to contain at least 1 lowercase character.")
elif len(digitRegex.findall(password)) == 0:
    print("Sorry, your password needs to contain at least 1 digit.")
else:
    print("Your password is strong!")
