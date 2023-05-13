const mysql= require("mysql")
const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hotel"

})
db.connect((error)=>{
    if(error) throw error
    console.log("database connectivity")

})
module.exports = db