function simple_assembler(program) {
    let registers = new Array();
    let registersValues = new Array();
    for(let i=0;i<program.length;) {
        console.log(`ciclo numero: ${i}`)
        let istruction = program[i];
        console.log(`istruzione : ${istruction}`);
        let currentRegister = istruction.substring(4,5);
        let registerIndex = registers.indexOf(currentRegister);
        console.log(istruction.substring(0,3));
        console.log(`current register: ${currentRegister}`)

        switch(istruction.substring(0,3)){
            case 'mov':
                let registerAlreadyExsist = false;
                console.log(`registro ${istruction.substring(4,5)}`);
                //check if the currentRegister already contains the currentRegister
                if(!registers.includes(istruction.substring(4,5)))
                    registers.push(istruction.substring(4,5));
                else
                    registerAlreadyExsist = true;

                let value = istruction.substring(6,istruction.length);
                console.log(`value is ${value}`);
                if(isNaN(value)){
                    let indexOfOtherRegister = registers.indexOf(value);
                    if(!registerAlreadyExsist){
                        registersValues.push(parseInt(registersValues[indexOfOtherRegister]))
                    }else
                        registersValues[registerIndex] = parseInt(registersValues[indexOfOtherRegister]);
                }else
                    if(!registerAlreadyExsist)
                        registersValues.push(parseInt(value));
                    else
                        registersValues[registerIndex] = parseInt(value);

                i++;
                break;
            case 'inc':
                registersValues[registerIndex] += 1;
                i++;
                break;
            case 'dec':
                registersValues[registerIndex] -= 1;
                i++;
                break;
            case 'jnz':
                let steps = parseInt(istruction.substring(5,istruction.length));
                if(registersValues[registerIndex] !==  0 ){
                    i += steps;
                }else
                    i++;
                break;
        }
        console.log(`current register:${currentRegister}, value:${registersValues[registerIndex]}`)
        console.log('\n')
    }

    console.log(registers);
    console.log(registersValues);

    let finalObject ={};

    for(let i =0;i<registers.length;i++){
        finalObject[registers[i]] = registersValues[i];
    }

    return finalObject
}

let simpleProgram = ['mov a 1','mov b 1','mov c 0','mov d 26','jnz c 2','jnz 1 5','mov c 7','inc d','dec c','jnz c -2','mov c a', 'inc a','dec b','jnz b -2','mov b c',
                    'dec d','jnz d -6','mov c 18','mov d 11','inc a','dec d','jnz d -2','dec c','jnz c -5'];
let nonSimpleProgram = ['mov a 5','mov b a','mov c 5','inc a','inc b','dec a','jnz a -2','mov c a','inc c','mov 1 5','dec 1','jnz 1 -1']
let programWithNumber = ['mov a 5','mov b a','mov c b'];

console.log(simple_assembler(simpleProgram));

// mov c 18
// mov d 11
// inc a
// dec d
// jnz d -2
// dec c
// jnz c -5