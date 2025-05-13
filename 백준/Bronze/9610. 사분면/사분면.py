n = int(input())
q1 = 0
q2 = 0
q3 = 0
q4 = 0
ax = 0

for i in range(n):
  a,b= map(int, input().split())
  if a*b >0:
    if a>0:
      q1+=1
    else:
      q3+=1
  elif a*b<0:
    if a>0:
      q4+=1
    else:
      q2+=1
  else:
    ax +=1

print(f"Q1: {q1}")
print(f"Q2: {q2}")
print(f"Q3: {q3}")
print(f"Q4: {q4}")
print(f"AXIS: {ax}")
  