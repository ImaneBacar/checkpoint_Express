const checkWorkingHours = (req, res, next) => {
    const maintenant = new Date(); 
    const jour = maintenant.getDay(); 
    const heure = maintenant.getHours();
    
    
    if ((jour >= 1 && jour <= 5) && (heure >= 9 && heure < 17)) {
        next(); // 
    } else {
        res.render('fermer.ejs');
    }
};

module.exports = checkWorkingHours;