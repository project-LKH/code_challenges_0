function time(number){
    let hr = Math.floor(number/60);
    let min = number%60;
    if (hr==1) {
        hr = hr + " Hour";
    } else {
        hr = hr + " hours";
    }

    if (min==1){
        min = min + " minute";
    }else {
        min = min + " minutes";
    }
    const answer = hr+" "+min;
    console.log(answer);
}

time(60);
