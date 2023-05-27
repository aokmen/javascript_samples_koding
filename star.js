
//     *
//    ***
//   *****
//  *******

console.clear();

function star(n){


for (let i = 0; i < n; i++) {
    let sum="";
    for (let j = n; j > i; j--) {
        sum += " ";
    }

    for (let k = 0; k < (i*2+1); k++) {
        sum += "*"      
    }
    for (let j = n; j > i; j--) {
        sum += " ";
    }
    console.log(sum);
}

for (let i = n; i >= 0; i--) {
    let sum="";
    for (let j = n; j > i; j--) {
        sum += " ";
    }

    for (let k = 0; k < (i*2+1); k++) {
        sum += "*"      
    }
    for (let j = n; j > i; j--) {
        sum += " ";
    }
   console.log(sum);
}
}

star(10);