import { Router } from 'express'
const router = Router()

//De la raiz renderiza un archivo llamado index.ejs
router.get('/inicio', (req, res) =>{
    res.render('index',{title: 'Mi primer proyecto en NodeJS'});
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
router.get('/producto', (req, res) => {
    const productos = [
        { nombre: 'Producto 1', imagen: '/img/producto1.png' },
        { nombre: 'Producto 2', imagen: '/img/producto2.png' },
    ];
    res.render('producto', { title: 'Productos', productos });
});
export default router