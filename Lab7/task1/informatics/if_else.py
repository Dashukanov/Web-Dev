#a
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)


#b
year = int(input())

if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print('YES')
else:
    print('NO')


#c
comp = int(input())
ans = int(input())

if comp == 1 and ans == 1:
    print('YES')
elif comp != 1 and ans != 1:
    print('YES')
else:
    print('NO')


#d
n = int(input())

if n > 0:
    print(1)
elif n < 0:
    print(-1)
else:
    print(0)


#e
a = int(input())
b = int(input())

if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)