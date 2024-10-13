import { Router } from 'express'
const router = Router()

//De la raiz renderiza un archivo llamado index.ejs
router.get('/index', (req, res) =>{
    res.render('index',{title: 'Ignite GYM'});
});
router.get('/servicios', (req, res) =>{
    res.render('servicios',{title: 'Servicios'});
});
router.get('/planes', (req, res) =>{
    res.render('planes',{title: 'Planes'});
});
router.get('/productos', (req, res) =>{
    res.render('productos',{title: 'Productos'});
});
router.get('/login', (req,res) =>{
    res.render('login',{title:'Login'})
})

export default router