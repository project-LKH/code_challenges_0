function commonLetters(str1,str2) {
    const common = [];
    for (i=0;i<str1.length; i+=1){

        for (j=0;j<str2.length; j+=1){

            if (str1[i]==str2[j]){

                common.push(str1[i]);
            }
        }
    }
    const answer = Array.from(new Set(common));//to re-crerate an array with no duplicates
    console.log("common letters : "+answer);
}

commonLetters("monstrosity","ministry");
