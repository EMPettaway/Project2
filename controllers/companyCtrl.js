const Company = require('../models/company')

// // index?
// const index = (req, res) => {
//     Company.find({}, (err, company)=>{
//         res.json(company)
//     })
// }

function addCompany(req,res){
    console.log('Create new company function was ran!')
    console.log(req.body)

    let newCompany = new Company(req.body)
    newCompany.save(() => console.log('New company was saved'))
    res.redirect('/companies')
}

function newCompany(req,res){
    // console.log('newCompany function ran!')
    res.render('addCompany')
}

async function showCompany(req,res) {
    // console.log('Index function ran!')
    let allCompanies = await Company.find({})
    // console.log(allCompany)
    res.render('index', {allCompanies})
}

function showDetail(req,res) {
    console.log('Show detail function ran!')

    console.log(req.params.companyId)

    Company.findById(req.params.companyId).then((company) => {
        res.render('companyDetail', {company})
    })
}

async function updateCompany(req,res) {
    console.log('Update function ran!')
    console.log(req.params.companyId)
    console.log(req.body)
    await Company.findByIdAndUpdate(req.params.companyId, req.body)
    res.redirect(`/companies/${req.params.companyId}`)
}

async function deleteCompany(req,res){
    console.log('company deleted')
    await Company.findByIdAndDelete(req.params.catId)
    // Company.findByIdAndDelete(req.params.companyId)
    res.redirect('/companies')
}
    

module.exports= {
    addCompany,
    showCompany,
    newCompany,
    deleteCompany,
    updateCompany,
    showDetail
}