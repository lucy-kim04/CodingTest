n = int(input())

curr = 1
prev = 0

if n == 0:
    print(0)
else:
    for _ in range(n - 1):
        curr, prev = curr + prev, curr
    print(curr)
