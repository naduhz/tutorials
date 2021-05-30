tableData = [
    ["apples", "oranges", "cherries", "banana"],
    ["Alice", "Bob", "Carol", "David"],
    ["dogs", "cats", "moose", "goose"],
]


def printTable():
    colWidths = [0] * len(tableData)
    for i in range(len(tableData)):
        for j in range(len(tableData[i])):
            if colWidths[i] < len(tableData[i][j]):
                colWidths[i] = len(tableData[i][j])
    for y in range(len(tableData[0])):
        for x in range(len(tableData)):
            print(tableData[x][y].rjust(colWidths[x]), end=" ")
        print("")


printTable()