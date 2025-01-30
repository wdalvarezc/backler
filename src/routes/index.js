/// traer las rutas de backend declaradas en src para tener modularizado el backend 
const {Router} = require('express');
const router = Router();
const Userroutes = require('./User');

router.use('/usuarios',Userroutes);

module.exports = router;