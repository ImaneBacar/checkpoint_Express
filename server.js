
const express = require("express");
const app = express();
const port = 4000; 

const checkWorkingHours = require('./middlewares/checkWorkingHours');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));


app.use(checkWorkingHours);

app.get('/', (req, res) => {
    res.redirect('/home');
});

// Route qui répond à toutes les requêtes
app.get('/home', function(req, res) {
    res.render('home.ejs')
    // Envoi de la réponse "Hello World"
});
app.get('/service', function(req, res) {
    res.render('service.ejs')
    // Envoi de la réponse "Hello World"
});
app.get('/contact', function(req, res) {
    res.render('contact.ejs')
    // Envoi de la réponse "Hello World"
});

// Lancement du serveur
app.listen(port, function() {
    console.log('Le serveur est en cours d\'exécution, ' +
        'veuillez ouvrir votre navigateur à http://localhost:%s', 
        port); 
});
