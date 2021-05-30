# MadLibs.py - reads in text files and lets the user add their own text
# anywhere the word ADJECTIVE, NOUN, ADVERB, or VERB appears in the text file.

import shelve, re

# Read a text file:
sampleFile = open(
    r"C:\Jordan\Python\Project Folder\Automate the Boring Stuff\sampleFile.txt", "r"
)
sampleText = sampleFile.read()


def madLib(anyStr):
    # Create a shelf storing the various inputs and their respective word class.
    wordShelf = shelve.open("MadLibs")
    # Create a list to reference to.
    words = ["adjective", "noun", "adverb", "verb"]
    # Input a word for each word class.
    for word in words:
        wordShelf[word] = str(input("Enter a/an %s: " % (word)))
        # Create a regex to find particular word class.
        wordRegex = re.compile(word, re.IGNORECASE)
        # Substitute adjective, noun, adverb and verb in a text.
        anyStr = wordRegex.sub(wordShelf[word], anyStr)
    wordShelf.close()
    return anyStr


# Print the results to the screen.
outputText = madLib(sampleText)
print(outputText)

# Save the results in a text file.
outputFile = open("outputFile.txt", "w")
outputFile.write(outputText)