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


def squared_error(y_original, y_bestfitline):
    return sum((y_bestfitline - y_original) ** 2)


def coefficient_of_determination(y_original, y_bestfitline):
    y_mean_line = [mean(y_original) for y in y_original]
    squared_error_regression = squared_error(y_original, y_bestfitline)
    squared_error_mean = squared_error(y_original, y_mean_line)
    return 1 - (squared_error_regression / squared_error_mean)


m, b = best_fit_slope_and_intercept(X, Y)
print(m, b)
regression_line = [(m * x) + b for x in X]

r_squared = coefficient_of_determination(Y, regression_line)
print(r_squared)

plt.scatter(X, Y)
plt.plot(X, regression_line, color="red")
plt.show()
