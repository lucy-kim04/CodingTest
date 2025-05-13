a = [1, 1, 2, 2, 2, 8]
b = list(map(int, input().split()))
answer = []

for i in range(6):
    answer.append(a[i] - b[i])

print(' '.join(map(str, answer)))
