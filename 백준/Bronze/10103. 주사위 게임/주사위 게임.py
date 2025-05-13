n = int(input())

a_score = 100
b_score = 100

for _ in range(n):
    a, b = map(int, input().split())
    if a > b:
        b_score -= a
    elif a < b:
        a_score -= b
    # 같으면 아무 일도 없음

print(a_score)
print(b_score)
