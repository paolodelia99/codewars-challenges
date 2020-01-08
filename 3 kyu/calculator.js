const Calculator = function() {
    this.prevOperator = "+";
    this.nextOperator = "";

    this.evaluate = string => {
        let result =0;
        let expression = ""+string;
        let currentNumber ="";
        for(let i=0;i<expression.length;i++){

            if(this.isNumber(expression.charAt(i))){
                currentNumber += expression.charAt(i);
                console.log(`the current number is: ${currentNumber}`)
            }else if(this.isOperator(expression.charAt(i))){
                currentNumber = parseInt(currentNumber);

                console.log(`the prev operator is: ${this.prevOperator}`)
                console.log(`the next operator is: ${this.nextOperator}`)

                result = this.executeOperation(result,currentNumber);

                currentNumber = "";
                this.prevOperator = this.nextOperator;
                this.nextOperator = "";
            }
        }

        result = this.executeOperation(parseInt(result),parseInt(currentNumber));

        return result;
    };

    this.isNumber = string => /^\d+$/.test(string);

    this.isOperator = string =>{
        switch (string) {
            case '*':
                this.nextOperator = '*';
                return true;
            case '+':
                this.nextOperator = '+';
                return true;
            case '-':
                this.nextOperator = '-';
                return true;
            case '/':
                this.nextOperator = '/';
                return true;
        }
    }

    this.executeOperation = (result, currentNumber)=>{
        switch (this.prevOperator) {
            case '*':
                result *= currentNumber;
                return result;
            case '+':
                result += currentNumber;
                return result;
            case '-':
                result -= currentNumber;
                return result;
            case '/':
                result /= currentNumber;
                return result;
        }
    }
};

const calculator = new Calculator();

console.log(calculator.evaluate('3+2-5+32+85'));