#a
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=' ')


#b
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=' ')


#c
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i**0.5 == int(i**0.5):
        print(i, end=' ')


#d
n = int(input())

for i in range(2, n + 1):
    if n % i == 0:
        print(i)
        exit()


#h
n = int(input())

for i in range(1, n + 1):
    if n % i == 0:
        print(i, end=' ')


#i
n = int(input())
cnt = 0
for i in range(1, int(n**0.5)):
    if n % i == 0:
        cnt += 1

if n % int(n**0.5) == 0:
    print(cnt * 2 + 1)
else:
    print(cnt * 2)



#j
ans = 0

for i in range(100):
    ans += int(input())

print(ans)


#k
n = int(input())
ans = 0

for i in range(n):
    ans += int(input())

print(ans)



#m
n = int(input())
ans = 0

for i in range(n):
    if int(input()) == 0:
        ans += 1

print(ans)