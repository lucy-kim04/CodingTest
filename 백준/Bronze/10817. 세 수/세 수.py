a, b, c = map(int, input().split())
nums = [a, b, c]
nums.remove(max(nums))
print(max(nums))