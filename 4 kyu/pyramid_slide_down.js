/**
 * @function longestSlideDown_v1: this method goes from top to bottom trying to find the best sum possible
 * but it didn't work with the codewars test, even if sometimes my method's sum was bigger than the expected one
 * @param pyramid
 * @returns {*}
 */

function longestSlideDown_v1 (pyramid) {
    let sum = 0 + pyramid[0][0];
    let prevIndex = 0;

    for(let i=1;i<pyramid.length;i++){

        if(prevIndex-1>=0){
            let maxNumber = pyramid[i][prevIndex-1];
            let startingIndex = prevIndex-1;

            for(let j = startingIndex;j<=startingIndex+2;j++){
                maxNumber = Math.max(maxNumber,pyramid[i][j]);

                if(maxNumber === pyramid[i][j])
                    prevIndex = j;
            }

            console.log('actual index: '+prevIndex)
            console.log('the choosen number is '+maxNumber);
            sum += maxNumber;
        }else{
            let maxNumber = pyramid[i][prevIndex];
            let startingIndex = prevIndex;

            for(let j = startingIndex;j<=startingIndex+1;j++){
                maxNumber = Math.max(maxNumber,pyramid[i][j]);

                if(maxNumber === pyramid[i][j])
                    prevIndex = j;
            }

            console.log('actual index: '+prevIndex)
            console.log('the choosen number is '+maxNumber);
            sum += maxNumber;
        }
        console.log('the sum is: '+sum);
    }

    return sum;
}

/**
 * @function logestSlideDown: this is the method that worked for all the codewars' tests
 * @param pyramid
 * @returns {pyramid[0][0]}
 */

function longestSlideDown (pyramid) {
    for(let i = pyramid.length-2;i>=0;i--){
        for(let j=0;j<pyramid[i][length];j++)
            pyramid[i][j] += Math.max(pyramid[i+1][j],pyramid[i+1][j+1])
    }
    return pyramid[0][0];
}


const bigPyramid = [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20,  4, 82, 47, 65],
    [19,  1, 23, 75,  3, 34],
    [88,  2, 77, 73,  7, 63, 67],
    [99, 65,  4, 28,  6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]];

const smallPyramid = [[75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20,  4, 82, 47, 65],
    [19,  1, 23, 75,  3, 34],
    [88,  2, 77, 73,  7, 63, 67],
    [99, 65,  4, 28,  6, 16, 70, 92]]

console.log(longestSlideDown(smallPyramid));