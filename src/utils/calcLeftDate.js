export function CalcLeftedTime(targetDate) {
    if (!targetDate) {
        targetDate = new Date().setHours(23 , 59 ,59 ,999);
        const oneHourMs = 60*60*1000;
        const oneMinMs = 60*1000;
        const oneSecMs = 1000;
        const leftedTime = targetDate - new Date().getTime();



        if (leftedTime> 0) {
        const hour = Math.trunc(leftedTime/oneHourMs)
        const min = Math.trunc((leftedTime % oneHourMs) / oneMinMs);
        const sec = Math.trunc((((leftedTime % oneHourMs) % oneMinMs)/ oneSecMs))
        return {hour , min , sec}            
        }else{
            return {hour: 0 , min: 0 , sec:0}
        }
  
    
    }
}