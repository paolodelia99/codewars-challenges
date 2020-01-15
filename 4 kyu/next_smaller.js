function nextSmaller(n) {
    let stringNumber = ""+n;
    let pivotIndex;
    let finalNumber = stringNumber;

    for (let i=stringNumber.length-1;i>0;i--){
        if(parseInt(stringNumber.charAt(i-1))>parseInt(stringNumber.charAt(i))){
            pivotIndex = i-1;
            //find the pivot subsitute
            let pivotSubsitute = stringNumber.charAt(i);
            for(let j=pivotIndex+1;j<stringNumber.length;j++){
                   if(stringNumber[j]>pivotIndex)
                       pivotIndex = stringNumber[j]
            }


            let rightNumbers = []
            for(let j=pivotIndex;j<stringNumber.length;j++)
                if(stringNumber.charAt(j) !== pivotSubsitute){
                    rightNumbers.push(stringNumber.charAt(j))
                }

            rightNumbers.sort();
            rightNumbers.reverse();
            rightNumbers.join("");

            finalNumber = stringNumber.substring(0,pivotIndex)+pivotSubsitute+rightNumbers;
        }
    }

    if(finalNumber === stringNumber)
        return -1;
    else
        return parseInt(finalNumber);
}

let string = "12343"
let provaArray = ["1","2","3","7"];
provaArray.sort();
provaArray.reverse();

console.log(string.split(""))
console.log(provaArray);

console.log(nextSmaller(13793457));