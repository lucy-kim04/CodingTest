x, y, w, h = map(int, input().split())

answer = [x, y, (w-x), (h-y)]
print(min(answer))