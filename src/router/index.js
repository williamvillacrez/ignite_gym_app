import { Router } from 'express'
const router = Router()

//De la raiz renderiza un archivo llamado index.ejs
router.get('/index', (req, res) =>{
    res.render('index',{title: 'Joshua Pereda'});
});
router.get('/cv', (req, res) =>{
    res.render('cv',{title: 'cv'});
});
router.get('/sertificados', (req, res) =>{
    res.render('sertificados',{title: 'Sertificados'});
});

router.get('/sertificados', (req, res) =>{
    res.render('sertificados',{title: 'Sertificados'});
});
export default router
