import pandas as pd
import numpy as np
import math
import datetime
import pickle

from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

import matplotlib.pyplot as plt
from matplotlib import style

style.use("ggplot")

df = pd.read_csv(
    "regression-intro/dogecoin-historical-dataset/DOGE-USD.csv",
    parse_dates=True,
    index_col="Date",
)


df["HL_PCT_change"] = (df["High"] - df["Low"]) / (df["Low"]) * 100.0
df["PCT_change"] = (df["Adj Close"] - df["Open"]) / (df["Open"]) * 100.0

df = df[["Adj Close", "HL_PCT_change", "PCT_change", "Volume"]]

forecast_col = "Adj Close"
df.fillna(method="ffill", inplace=True)

forecast_out = int(math.ceil(0.01 * len(df)))

df["prediction"] = df[forecast_col].shift(-forecast_out)


X = np.array(df.drop(["prediction"], axis=1))
X = preprocessing.scale(X)
X = X[:-forecast_out]
X_lately = X[-forecast_out:]


df.dropna(axis=0, inplace=True)
y = np.array(df["prediction"])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42
)

# classifier = LinearRegression()
# classifier.fit(X_train, y_train)
# with open("linearregression.pickle", "wb") as f:
#     pickle.dump(classifier, f)

pickle_in = open("linearregression.pickle", "rb")
classifier = pickle.load(pickle_in)

accuracy = classifier.score(X_test, y_test)
forecast_set = classifier.predict(X_lately)
print(forecast_set, accuracy, forecast_out)

df["Forecast"] = np.nan
last_date = df.iloc[-1].name
last_unix = last_date.timestamp()
one_day = 86400
next_unix = last_unix + one_day

for i in forecast_set:
    next_date = datetime.datetime.fromtimestamp(next_unix)
    next_unix += one_day
    df.loc[next_date] = [np.nan for j in range(len(df.columns) - 1)] + [i]

df["Adj Close"].plot()
df["Forecast"].plot()
plt.legend(loc=4)
plt.xlabel("Date")
plt.ylabel("Price")
plt.show()
