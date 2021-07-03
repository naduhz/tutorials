college = read.csv('./intro-to-stat-learning-datasets/College.csv')

rownames(college)=college[,1]
college = college[,-1]
fix(college)

summary(college)
pairs(college[,1:10])

plot(college$Private, college$Outstate, xlab = "Private University", ylab ="Out of State tuition in USD", main = "Outstate Tuition Plot")

Elite = rep("No", nrow(college))
Elite[college$Top10perc > 50] = "Yes"
Elite = as.factor(Elite)
college = data.frame(college, Elite)

summary(college)
plot(college$Elite, college$Outstate, xlab = "Elite University", ylab ="Out of State tuition in USD", main = "Outstate Tuition Plot")

par(mfrow=c(2,2))
hist(college$Books, col = 2, xlab = "Books", ylab = "Count")
hist(college$PhD, col = 3, xlab = "PhD", ylab = "Count")
hist(college$Grad.Rate, col = 4, xlab = "Grad Rate", ylab = "Count")
hist(college$perc.alumni, col = 6, xlab = "% alumni", ylab = "Count")

summary(college$PhD)

weird.phd = college[college$PhD == 103,]
rownames(weird.phd)

auto = read.csv('./intro-to-stat-learning-datasets/Auto.csv')
auto = na.omit(auto)
str(auto)

summary(auto[,-c(4,9)])
subset = auto[-c(10:85), -c(4,9)]
summary(subset)

pairs(auto)

library(MASS)
Boston
?Boston
nrow(Boston)
ncol(Boston)
summary(Boston)

hist(Boston$crim, breaks=50)
pairs(Boston[Boston$crim < 20,])

nrow(Boston[Boston$crim > 20,])

hist(Boston$tax, breaks=50)
nrow(Boston[Boston$tax == 666,])

hist(Boston$ptratio, breaks=50)
nrow(Boston[Boston$ptratio > 20,])

nrow(Boston[Boston$chas ==1,])
median(Boston$ptratio)

row.names(Boston[min(Boston$medv),])
range(Boston$tax)
Boston[min(Boston$medv),]$tax

nrow(Boston[Boston$rm > 7,])
nrow(Boston[Boston$rm > 8,])
