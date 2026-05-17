module.exports = (req, res) => {
  res.json({
    companyName:    process.env.COMPANY_NAME    || '',
    vatNumber:      process.env.COMPANY_VAT     || '',
    iban:           process.env.COMPANY_IBAN    || '',
    companyAddress: process.env.COMPANY_ADDRESS || '',
    companyEmail:   process.env.COMPANY_EMAIL   || '',
    companyPhone:   process.env.COMPANY_PHONE   || '',
  });
};
