#a
n = int(input())
i = 1
while i**2 <= n:
    print(i**2)
    i += 1


#b
n = int(input())
i = 2
while n % i != 0:
    i += 1

print(i)


#c
n = int(input())
i = 1
while i <= n:
    print(i)
    i *= 2


#d
n = int(input())

while n > 1:
    n /= 2

if n == 1:
    print('YES')
else:
    print('NO')


#e
n = int(input())
two = 1
k = 0
while two < n:
    two *= 2
    k += 1

print(k)