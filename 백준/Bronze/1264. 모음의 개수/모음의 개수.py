while True:
    s = input()
    if s == '#':
        break
    count = 0
    for i in s.lower():
        if i in 'aeiou':
            count += 1
    print(count)
