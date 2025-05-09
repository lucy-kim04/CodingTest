scores = [int(input()) for _ in range(5)]  # 점수 5개 입력 받기
total = 0

for s in scores:
    if s >= 40:
        total += s
    else:
        total += 40

print(total // 5)
