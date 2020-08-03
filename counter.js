let value = 500,
    div = 1,
    degr = 10,
    num = 0,
    count = 0;

while (count <= value) {

if (num < 10) {
    console.log (num);
    count++;
}

else if (num == degr) {
    div = div + 1;
    degr = degr * 10;
    
    if (num%div == 0) {
        console.log (num);
        count++;
    }
}

else if (num%div == 0) {
    console.log (num);
    count++;
}
    num++;
};
