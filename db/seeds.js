console.log('Seeds file ran!')
require('./db/connection')

const Company = require('../models/company.js')
const companySeeds = require('./companyseeds.json')

// Delete all bookmarks in the database
// Feds.deleteMany({})
// .then(()=>{
//     return Fed.insertMany(fedsSeeds)
//     .then((feds)=>{
//         console.log(feds)
//     })
// })
// .finally(()=>{
//     process.exit
// })