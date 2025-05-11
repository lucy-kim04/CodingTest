def solution(numLog):
    diff = {
        1: 'w',
        -1: 's',
        10: 'd',
        -10: 'a'
    }
    return ''.join(diff[b - a] for a, b in zip(numLog, numLog[1:]))
