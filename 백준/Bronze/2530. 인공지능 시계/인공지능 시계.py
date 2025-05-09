a, b, c = map(int, input().split())
d = int(input())

s = (c + d) % 60
m = ((c + d) // 60 + b) % 60
h = (a + ((c + d) // 60 + b) // 60) % 24

answer = ' '.join(map(str, [h, m, s]))
print(answer)
