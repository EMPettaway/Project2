const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/companyCtrl');

// router.get('/', companyCtrl.index);
// router.get('/new', companyCtrl.new);
// router.get('/:id', companyCtrl.show);


router.get('/companies', companyCtrl.showCompany);

router.get('/companies/new', companyCtrl.newCompany);

router.post('/companies', companyCtrl.addCompany);

router.get('/companies/:companyId', companyCtrl.showDetail)

router.patch('/companies/:companyId', companyCtrl.updateCompany);

router.delete('/companies/:companyId', companyCtrl.deleteCompany);

module.exports = router;

// module.exports = {
//     index,
//     deleteCompany,
//     create,
//     update
// }