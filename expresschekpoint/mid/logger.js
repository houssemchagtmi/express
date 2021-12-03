const date= new Date()
console.log(date)
const day = date.getDay()
console.log(day)
const hour = date.getHours()
console.log(hour)
const logger = (req, res ,next) =>{
if(day>5 || hour<9 || hour>17){
 res.send ('<h1> MSAKRIN ARJE3 8ODOIA </h1>')
}
next()
}

module.exports = logger
