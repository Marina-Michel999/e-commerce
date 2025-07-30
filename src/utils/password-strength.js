export function checkPassStrength(password) {
    let strength = 0;
    let feedback ={text:"" , width:"" , background:""}
    if (password.length>8) {
        strength++
    };
    if (/[A-Z]/.test(password)) {
        strength++
    };
    if (/[a-z]/.test(password)) {
        strength++
    };
    if (/[0-9]/.test(password)) {
        strength++
    };
    if (/[!@#$%^&*_-]/.test(password)) {
        strength++
    };
    if (password.length>12) {
        strength++
    };    
    switch (strength) {
    case 1:
        feedback.text='Very weak';
        feedback.background='bg-red-500';
        feedback.width='w-1/6'
        break;
    case 2:
        feedback.text='Weak';
        feedback.background='bg-orange-500';
        feedback.width='w-2/6'
        break;
    case 3:
        feedback.text='Fair';
        feedback.background='bg-yellow-500';
        feedback.width='w-3/6'
        break;
    case 4:
        feedback.text='Good';
        feedback.background='bg-lime-500';
        feedback.width='w-4/6'
        break;
    case 5:
        feedback.text='Strong';
        feedback.background='bg-green-400';
        feedback.width='w-5/6'
        break;
    case 6:
        feedback.text='Very strong';
        feedback.background='bg-green-600';
        feedback.width='w-full'
        break;
 
}
return feedback
}
