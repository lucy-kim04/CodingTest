def solution(num_list):
    even = []
    odd = []
    for i in range(len(num_list)):
        if num_list[i] % 2 == 0:
            even.append(str(num_list[i]))
        else:
            odd.append(str(num_list[i]))
    return int(''.join(even)) + int(''.join(odd))
