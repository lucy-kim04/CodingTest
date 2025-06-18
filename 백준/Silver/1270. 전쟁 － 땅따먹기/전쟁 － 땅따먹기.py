import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    data = list(map(int, input().split()))
    t = data[0]
    soldiers = data[1:]

    count = Counter(soldiers)
    most_common = count.most_common(1)[0]  # (군대번호, 등장횟수)

    if most_common[1] > t // 2:
        print(most_common[0])
    else:
        print("SYJKGW")
