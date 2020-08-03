let N = 500,
    div = 1,
    count = 10
    i = 0;

while (i <= N) {

if (i < 10) {
    console.log (i)
}

else if (i == count) {
    div = div + 1
    count = count * 10
    
    if (i%div == 0) {
        console.log (i)
    }
    else continue;
}

else if (i%div == 0) {
    console.log (i)
}
    i++;
};
