import pandas as pd
import numpy as np
import math

from sklearn import preprocessing
from sklearn.model_selection import cross_validate, train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error

df = pd.read_csv("regression-intro/dogecoin-historical-dataset/DOGE-USD.csv")


df["HL_PCT_change"] = (df["High"] - df["Low"]) / (df["Low"]) * 100.0
df["PCT_change"] = (df["Adj Close"] - df["Open"]) / (df["Open"]) * 100.0

df = df[["Adj Close", "HL_PCT_change", "PCT_change", "Volume"]]

forecast_col = "Adj Close"
df.fillna(method="ffill", inplace=True)

forecast_out = int(math.ceil(0.001 * len(df)))
print(forecast_out)

df["prediction"] = df[forecast_col].shift(-forecast_out)
df.dropna(axis=0, inplace=True)

X = np.array(df.drop(["prediction"], axis=1))
y = np.array(df["prediction"])

X = preprocessing.scale(X)
y = np.array(df["prediction"])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42
)

classifier = LinearRegression()
classifier.fit(X_train, y_train)

pred = classifier.predict(X_test)

accuracy = classifier.score(X_test, y_test)

print(accuracy)
print(mean_absolute_error(y_test, pred))
print(mean_squared_error(y_test, pred))
print(np.sqrt(mean_squared_error(y_test, pred)))
