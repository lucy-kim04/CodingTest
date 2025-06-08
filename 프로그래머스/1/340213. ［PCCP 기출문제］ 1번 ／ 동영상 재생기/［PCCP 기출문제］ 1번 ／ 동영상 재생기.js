function solution(video_len, pos, op_start, op_end, commands) {
    const toSeconds = (str) => {
        const [mm, ss] = str.split(":").map(Number);
        return mm * 60 + ss;
    };
    const toMinutes = (sec) => {
        const mm = String(Math.floor(sec/60)).padStart(2,'0');
        const ss = String(sec%60).padStart(2,'0');
        return `${mm}:${ss}`
    }
    
    const total = toSeconds(video_len)
    let cur = toSeconds(pos)
    const start = toSeconds(op_start)
    const end = toSeconds(op_end)
    
    if (start<=cur && cur<=end) {
        cur = end
    }
    
    for(let i=0;i<commands.length; i++) {
        if (commands[i] === 'next') {
            cur = Math.min(cur + 10, total);
        } else {
            cur = Math.max(cur - 10, 0);
        }

        
        if(cur>=start && cur<=end) {
            cur = end
        }
    }
    return toMinutes(cur);
};