from statistics import mean
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style

style.use("fivethirtyeight")

np.random.seed(42)
X = np.random.randint(
    100,
    size=30,
)
Y = np.random.randint(100, size=30)


def best_fit_slope_and_intercept(x, y):
    m = ((mean(X) * mean(Y)) - mean(X * Y)) / ((mean(X)) ** 2 - mean(X ** 2))
    b = mean(y) - m * mean(X)
    return m, b


m, b = best_fit_slope_and_intercept(X, Y)
print(m, b)
regression_line = [(m * x) + b for x in X]

plt.scatter(X, Y)
plt.plot(X, regression_line, color="red")
plt.show()
