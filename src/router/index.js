import { Router } from 'express'
const router = Router()

//De la raiz renderiza un archivo llamado index.ejs
router.get('/', (req, res) =>{
    res.render('index',{title: 'Mi primer proyecto en NodeJS'});
});
router.get('/about', (req, res) =>{
    res.render('about',{title: 'About us'});
});
router.get('/contact', (req, res) =>{
    res.render('contact',{title: 'Contactanos'});
});
router.get('/login', (req,res) =>{
    res.render('login',{title:'Login'})
})

export default router