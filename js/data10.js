
const fs = require ("fs")
const allData = require("./allData")

const addPerson = (id ,fname , lname , age , city) => {

    const allData = loadData()


    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })


    if (duplicatedData.length == 0) {

        allData.push({
            fname : fname,
            lname : lname,
            age : age,
            city : city,
            id: id
        })
    
        SaveAllData(allData)

    }else {
        console.log("ERROR DUPLICATED ID")
    }

    
}


//-----------------------------------
const loadData = () => {

    try {

        const DataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(DataJson)   //-----> to convert json to object
    }

    catch {
        return[]
    }
    
}
//-----------------------------------

const SaveAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)  //----> to convert object to json

    fs.writeFileSync("data10.json" , AllDataJson)
}


//------------------------------------



const deleteData = (id) =>{
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    SaveAllData(dataToKeep)
    console.log("you have already deleted an item")
}


/////////////////////////////////////////////////////////////


const readData = (id) => {

  const allData = loadData()

  const itemNeeded = allData.find((obj) =>{
    return obj.id == id

  })

//   console.log(itemNeeded)


  if(itemNeeded) {
    console.log(itemNeeded.id)
  }else {
    console.log("id needed not found")
  }


}
/////////////////////////////////////////////////////////////


const listData = () => {
    const allData = loadData()

    allData.forEach((obj) => {
     console.log(obj.fname , obj.age , obj.city)
    })
}

/////////////////////////////////////////////////////////////
module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}