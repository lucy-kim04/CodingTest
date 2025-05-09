T = int(input())

for _ in range(T):
    case = input().split()
    answer = float(case[0])

    for op in case[1:]:
        if op == '@':
            answer *= 3
        elif op == '%':
            answer += 5
        elif op == '#':
            answer -= 7

    print(f"{answer:.2f}")
