function solution(A,B){
    var answer = 0

    A = new Int32Array(A).sort((a, b) => a - b);
    B = new Int32Array(B).sort((a, b) => b - a);

    for (i=0; i<A.length; i++) {
        answer += A[i]*B[i]
    }
    return answer
}