class home {
BalconyMfc: string = ""
BackyardMfc: string = ""
EnergyMfc: string = ""

}

function dosomethingwiththis() {

    const newObject = new home()

    //this new object is a pointer to the real
    //so underthe hood it amkes it 
    return newObject
}
function anotherFunction(takeIn: home){

    dosomethingwiththis()

}

function OperatorFunction(){

    anotherFunction(dosomethingwiththis())
    // hence that object is referenceable 
}
