const RantRepository = require('../model/rantModel');
const bcryptjs = require('bcryptjs');
const sha1 = require('sha1');
let bcryptInp = '';
let sha1Inp = ''


function main(req, res){
    res.render("rant", { bcrypt: bcryptInp, sha1: sha1Inp });
}

async function geraHash(req, res){
    bcryptInp = bcryptjs.hashSync(req.body.inp);
    sha1Inp = sha1(req.body.inp);
    await RantRepository.create({
        valorInput: req.body.inp,
        bcrypt: bcryptInp,
        sha1: sha1Inp
    });
    res.redirect("/rant");
    
}
module.exports = { main, geraHash }
