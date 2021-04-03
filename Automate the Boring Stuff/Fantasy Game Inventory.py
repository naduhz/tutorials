playerInven = {"rope": 1, "torch": 6, "gold coin": 42, "dagger": 1, "arrow": 12}


def displayInventory(inventory):
    print("Inventory:")
    itemCount = 0
    for k, v in inventory.items():
        print(str(v) + " " + k)
        itemCount += v
    print("Total number of items: " + str(itemCount))


displayInventory(playerInven)

dragonLoot = ["gold coin", "dagger", "gold coin", "gold coin", "ruby"]


def addToInventory(inventory, addedItems):
    for i in addedItems:
        inventory.setdefault(i, 0)
        inventory[i] += 1
    return inventory


inv = {"gold coin": 42, "rope": 1}
dragonLoot = ["gold coin", "dagger", "gold coin", "gold coin", "ruby"]
inv = addToInventory(inv, dragonLoot)
displayInventory(inv)