import pandas as pd

df = pd.read_csv(
    "k-nearest-neighbors/breast-cancer-uci-dataset/breast-cancer-wisconsin.data"
)

df.info()
print(df.head())
print(df.columns)
