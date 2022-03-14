function checkForVowels(str) {
    let answer = [];
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    for (i=0;i<str.length; i+=1){
        for (j=0;j<vowels.length; j+=1){
            if (str[i]==vowels[j]){
                answer.push(str[i]);
            }
        }
    }
    const x = Array.from(new Set(answer)); // to re-create an array with no duplicates
    console.log("Vowels : "+x);
}
checkForVowels("what are the vowels in this sentence?");
