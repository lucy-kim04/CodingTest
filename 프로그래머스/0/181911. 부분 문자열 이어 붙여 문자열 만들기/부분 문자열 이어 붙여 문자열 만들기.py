def solution(my_strings, parts):
    result = ''
    for i in range(len(parts)):
        s, e = parts[i]
        result += my_strings[i][s:e+1]
    return result
