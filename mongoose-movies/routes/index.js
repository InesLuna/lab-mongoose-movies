const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//show all celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render('./celebrities/index', { celebrities: allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

//rutas get de add y delete porque lo otro da por culo
router.get('/celebrity/add', (req, res, next)=>{
  res.render('./celebrities/celebrity-add')
})

router.get('/celebrity/delete', (req, res, next)=>{
  Celebrity.findOne({_id: req.query.celebrity_id})
  .then((celebrity)=>{
    res.render('./celebrities/celebrity-delete', {celebrity})
  })
  .catch((err)=>{
    console.log(err)
  })
});

//show celebrity details
router.get('/celebrity/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  
  if (!/^[0-9a-fA-F]{24}$/.test(celebrityId)) { 
    console.log(celebrityId);
    return res.status(404).render('not-found');
  }
  Celebrity.findOne({'_id': celebrityId})
   // .populate('author') //populate hace magia. substituye loq ue ahora se muestra como id (la de author) y la substituye por los datos que contiene esa id.
    .then(celebrity => {
      if (!celebrity) {
        
          return res.status(404).render('not-found');
      }
      res.render("./celebrities/celebrity-details", { celebrity })
    })
    .catch(next)
});
//add new celebrities //no funciona la view por lo que no puedo comprobar, ya no se que mas mierda hacer



router.post('/celebrity/add', (req, res, next)=>{
  const {name, ocupation, catchPhrase} = req.body //desttructura el body, puedo aceder al body del formulario porque tengo intalado body-parser
  const newCelebrity = new Celebrity({name, ocupation, catchPhrase}); //crear libro nuevo
  newCelebrity.save()
    .then((celebrity)=>{
      res.redirect('/celebrities');
    })
    .catch((err)=>{
      console.log(err)
    })
})
//eliminar celebrities



router.post('/celebrity/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.query.celebrity_id) 
  .then((celebrity) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  })
});
module.exports = router;
