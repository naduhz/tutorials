import pandas as pd

df = pd.read_csv("regression-intro/dogecoin-historical-dataset/DOGE-USD.csv")

print(df.info())

print(df.head())

df = df.dropna()

df["HL_PCT_change"] = (df["High"] - df["Low"]) / (df["Low"]) * 100.0
df["PCT_change"] = (df["Adj Close"] - df["Open"]) / (df["Open"]) * 100.0

df = df[["Adj Close", "HL_PCT_change", "PCT_change", "Volume"]]

print(df.head())
