a = list(input())

prev = a[0]
curr = ''
count = 10

for i in range(1, len(a)):
  curr = a[i]
  if curr == prev:
    count += 5
  else:
    count +=10
    prev = curr

print(count)