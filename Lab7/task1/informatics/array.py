#a
n = int(input())
a = [int(i) for i in input().split()]

for i in range(0, n, 2):
    print(a[i], end=' ')


#b
n = int(input())
a = [int(i) for i in input().split()]

for i in a:
    if i % 2 == 0:
        print(i, end=' ')


#c
n = int(input())
a = [int(i) for i in input().split()]
cnt = 0
for i in a:
    if i > 0:
        cnt += 1

print(cnt)


#d
n = int(input())
a = [int(i) for i in input().split()]
cnt = 0
for i in range(1, n):
    if a[i] > a[i - 1]:
        cnt += 1

print(cnt)



#e
n = int(input())
a = [int(i) for i in input().split()]

for i in range(1, n):
    if a[i] < 0 and a[i - 1] < 0:
        print('YES')
        exit()
    elif a[i] >= 0 and a[i - 1] >= 0:
        print('YES')
        exit()

print('NO')



#f
n = int(input())
a = [int(i) for i in input().split()]
cnt = 0
for i in range(1, n - 1):
    if a[i - 1] < a[i] and a[i + 1] < a[i]:
        cnt += 1

print(cnt)



#g
n = int(input())
a = [int(i) for i in input().split()]

print(*reversed(a))