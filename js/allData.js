const firstname = "Hossam"

const lastname = "wasfy"

const city = "Mansoura"

const age = "25YO"

function mul(x,y){
    console.log(x*y)
}

// module.exports = firstname
// module.exports = lastname

module.exports= {

    fName : firstname,
    lName : lastname,
    city : city,
    age : age,
    fun1 : mul
}
