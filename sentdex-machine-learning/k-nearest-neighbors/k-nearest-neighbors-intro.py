import pandas as pd
import numpy as np

from sklearn import neighbors
from sklearn.model_selection import train_test_split


df = pd.read_csv(
    "k-nearest-neighbors/breast-cancer-uci-dataset/breast-cancer-wisconsin.data"
)
df.replace("?", -99999, inplace=True)
df.drop(["id"], axis=1, inplace=True)

df.info()
print(df.head())
print(df.columns)

X = np.array(df.drop(["class"], axis=1))
y = np.array(df["class"])


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

classifier = neighbors.KNeighborsClassifier()
classifier.fit(X_train, y_train)

accuracy = classifier.score(X_test, y_test)
print(accuracy)

example_measures = np.array([[4, 2, 1, 1, 1, 2, 3, 2, 1]])
prediction = classifier.predict(example_measures)
print(prediction)
