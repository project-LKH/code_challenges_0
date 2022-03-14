function areaOFTriangle(a,b,c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(((s-a)*(s-b)*(s-c))*s);
    console.log(area);
}

areaOFTriangle(3,4,5);
