import sys
input = sys.stdin.read

dp = [0] * 251
dp[0] = 1
dp[1] = 1
for i in range(2, 251):
    dp[i] = dp[i - 1] + 2 * dp[i - 2]

for line in input().split():
    n = int(line)
    print(dp[n])
