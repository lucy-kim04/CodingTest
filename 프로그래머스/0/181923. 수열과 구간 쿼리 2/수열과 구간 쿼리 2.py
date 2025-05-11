def solution(arr, queries):
    answer = []
    for s, e, k in queries:
        q = [i for i in arr[s:e+1] if i > k]
        if q:
            answer.append(min(q))
        else:
            answer.append(-1)
    return answer
