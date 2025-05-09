def solution(my_string, is_prefix):
    n = len(is_prefix)
    if my_string[:n] == is_prefix:
        return 1
    else:
        return 0
