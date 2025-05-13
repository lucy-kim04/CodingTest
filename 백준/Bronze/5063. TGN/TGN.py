n = int(input())

for _ in range(n):
    r, e, c = map(int, input().split())
    i = e - c
    if r > i:
        print('do not advertise')
    elif r < i:
        print('advertise')
    else:
        print('does not matter')
