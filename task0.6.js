function maximumNum() {
    let maxNum=0;
    for (i=0;i<arguments.length;i+=1){

        if (arguments[i]>maxNum){
            maxNum=arguments[i];
        }
    }
    return maxNum;
}
maximumNum(6,8,2,4,9,1);
