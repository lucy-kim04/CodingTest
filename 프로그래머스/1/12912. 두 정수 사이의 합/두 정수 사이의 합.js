function solution(a, b) {
    if(b>a) {
            return((b*(b+1)/2)-((a-1)*a/2))
    } else {
        return ((a*(a+1)/2)-((b-1)*b/2))
    }

}