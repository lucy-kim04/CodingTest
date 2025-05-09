def solution(a, d, included):
    count = 0
    index = []
    for i in range(len(included)):
        if included[i]:
            count +=1
            index.append(i)
    return(a*count + d*sum(index))