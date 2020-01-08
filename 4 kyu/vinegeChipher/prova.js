const key = 'password';
const abc = "paolo e un grande";
const lunghezzaABC = abc.length;

console.log(`la lunghezza di abc e' ${lunghezzaABC}`);
console.log(`la lunghezza di password e' ${key.length} e il modulo tra le due lunghezze e' ${lunghezzaABC%key.length}`);
console.log(`divisione tra abc e key ${parseInt(lunghezzaABC/key.length)}`);

const sottoStringaKey = key.substring(0,parseInt(lunghezzaABC%key.length));

const stampaLettere = ()=>{
  for(let i=97;i<123;i++)
    console.log(String.fromCharCode(i));
}

const tabuleRecta = ()=>{
  let rectaMatrix = new Array();
  for(let i=97;i<123;i++){
    let string = ''
    for(let j=0;j<26;j++){
      if(i === 123)
        j -= 26;

      string += String.fromCharCode(j+i);
    }
    rectaMatrix.push(string)
  }

  return rectaMatrix;
}

const printBidimensionalArray = (bidArray)=>{
  for(let i=0;i<bidArray.length;i++){
    console.log(bidArray[i]);
    }
}

printBidimensionalArray(tabuleRecta());

console.log(abc);
console.log(key.repeat(parseInt(lunghezzaABC/key.length))+sottoStringaKey);
