function maximumNum() {
    let maxNum=arguments[1];
    for (let i=0;i<arguments.length;i+=1){

        if (arguments[i]>maxNum){
            maxNum=arguments[i];
        }
    }
    return maxNum;
}
maximumNum(6,8,2,4,9,1);
