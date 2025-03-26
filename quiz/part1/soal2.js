//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    let temp = [];
    let long;
    if(angka1>= angka2) {
        long = angka1;
    } else {
        long = angka2;
    }
    for (let i = 1 ; i <= long ; i++){
        if (angka1 % i === 0 && angka2 % i === 0 ) {
            temp.push(i);
        }
    }
    const terbesar = temp;
    return Math.max(...terbesar);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1