class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


f = open("../../me.txt", "r")

dataArr = f.readline().split(".")
p = Person(dataArr[0], dataArr[1])

print(p.age)