spam = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]


def commaSeparator(anyList):
    anyString = ""
    for i in range(len(anyList)):
        if i < (len(anyList) - 2):
            anyString += anyList[i] + ", "
        elif i == (len(anyList) - 2):
            anyString += anyList[i] + ", and "
        elif i == (len(anyList) - 1):
            anyString += anyList[i]
    return anyString


print(spam)
print(commaSeparator(spam))
