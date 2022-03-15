function celToFah(cel){
    const fahrenheight = (cel *1.8)+32;
    return fahrenheight;
}

function fahToCel(fah) {
    const celcius= (fah-32)*(5/9);
    return celcius;
}


celToFah(33); //celcuis to fahrenheight

fahToCel(33); //fahrenheight to celcuis
