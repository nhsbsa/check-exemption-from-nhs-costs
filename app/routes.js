var express = require('express');
var router = express.Router();

// Route index page
router.get('/', function (req, res) {
  res.render('index');
})

//create applicant

var applicantMaster = require('./applicant.js');
var applicant = applicantMaster.createApplicant();
applicant.firstName = "Jane";
applicant.lastName = "Doe";
applicant.fullName = "Jane Doe";
applicant.age= undefined;
applicant.dobDay = null;
applicant.dobMonth = null;
applicant.dobYear = null;
applicant.hasNhsno = null;
applicant.nhsno = null;
applicant.postCode = null;
applicant.hasMobile = false;
applicant.hasEmail = false;
applicant.hasTelephone = false;
applicant.mobile = null;
applicant.contactPref = 'post';
applicant.contactValue = '3 street, Town, NE1 246';
applicant.email = null;
applicant.address = null;


var thisYear = 2017;


//** RETURN **//

//dob
router.get(/return_date/, function (req, res) {
  res.render('return/return_date');
});

//name
router.get(/return_name/, function (req, res) {
  res.render('return/return_name');
});

router.get(/name-handler/, function (req, res) {
  applicant.firstName = req.query.firstname;
  applicant.lastName = req.query.lastname;
  applicant.setFullName();
  res.redirect('return_postcode');
});

//postcode
router.get(/return_postcode/, function (req, res) {
  res.render('return/return_postcode');
});

//nhs number
router.get(/return-handler/, function (req, res) {
  res.render('return/return-view-yes2');
});

// //return-view
// router.get(/nhsnumber-handler/, function (req, res) {
//   res.render('return/return-view-yes', {
//     name : applicant.firstName + ' ' + applicant.lastName
//   });
// });

module.exports = router;


