T = int(input())

for _ in range(T):
    N = int(input())
    max_drink = 0
    answer = ""

    for _ in range(N):
        school, drink = input().split()
        drink = int(drink)

        if drink > max_drink:
            max_drink = drink
            answer = school

    print(answer)
