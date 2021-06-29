from statistics import mean
import numpy as np
import random
import matplotlib.pyplot as plt
from matplotlib import style

style.use("fivethirtyeight")

# np.random.seed(42)
# X = np.random.randint(
#     100,
#     size=30,
# )
# Y = np.random.randint(100, size=30)


def create_dataset(size, variance, step=2, correlation=False):
    val = 1
    X = []
    Y = []
    for i in range(size):
        y = val + random.randrange(-variance, variance)
        Y.append(y)
        if correlation and correlation == "pos":
            val += step
        elif correlation and correlation == "neg":
            val -= step
    X = [i for i in range(len(Y))]

    return np.array(X, dtype=np.float64), np.array(Y, dtype=np.float64)


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


X, Y = create_dataset(40, 8, 2, correlation="pos")

m, b = best_fit_slope_and_intercept(X, Y)
regression_line = [(m * x) + b for x in X]

r_squared = coefficient_of_determination(Y, regression_line)
print(r_squared)

predict_x = 8
predict_y = (m * predict_x) + b

plt.scatter(X, Y)
plt.plot(X, regression_line, color="red")
plt.scatter(predict_x, predict_y, color="green", s=100)
plt.show()
