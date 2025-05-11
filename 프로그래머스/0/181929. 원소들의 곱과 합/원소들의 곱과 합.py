def solution(num_list):
    multiple = 1
    add = 0
    
    for i in range(len(num_list)):
        multiple *= num_list[i]
        
    for i in range(len(num_list)):
        add += num_list[i]

    if multiple < add**2:
        return 1
    else:
        return 0
