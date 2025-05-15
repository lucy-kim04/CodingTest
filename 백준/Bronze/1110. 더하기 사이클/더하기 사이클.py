n = int(input())
original = n

if n < 10:
    n = n * 10

count = 0

current = n
while True:
    count += 1
    a = current % 10
    b = (current // 10 + current % 10) % 10
    current = a * 10 + b

    if current == n:
        break

print(count)
