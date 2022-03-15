function areaOFTriangle(a,b,c) {
    const s = (a+b+c)/2;
    const area = Math.sqrt(((s-a)*(s-b)*(s-c))*s);
    return area;
}

areaOFTriangle(3,4,5);

