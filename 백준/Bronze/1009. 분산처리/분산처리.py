t = int(input())

for _ in range(t):
    a, b = map(int, input().split())
    a = a % 10  # 1의 자리만 보면 됨

    if a == 0:
        print(10)
    elif a in [1, 5, 6]:
        print(a)
    elif a in [4, 9]:
        cycle = 2
        b = b % cycle
        b = b if b != 0 else cycle
        print((a ** b) % 10)
    else:
        cycle = 4
        b = b % cycle
        b = b if b != 0 else cycle
        print((a ** b) % 10)
