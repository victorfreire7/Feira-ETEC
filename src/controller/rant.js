const RantRepository = require('../model/rantModel');
const bcryptjs = require('bcryptjs');
const sha1 = require('sha1');
let n = ''
let bcryptInp = '';
let sha1Inp = ''
let scrollTo = ''


function main(req, res){
    scrollTo = false;
    res.render("rant", { valor: n, bcrypt: bcryptInp, sha1: sha1Inp, scrollTo: scrollTo });
}

async function geraHash(req, res){
    bcryptInp = bcryptjs.hashSync(req.body.nome);
    sha1Inp = sha1(req.body.nome);
    scrollTo = true;
    n = req.body.nome
    await RantRepository.create({
        valorInput: req.body.nome,
        bcrypt: bcryptInp,
        sha1: sha1Inp,
    });
    res.redirect("/rant#tabel-hash");
    
}
module.exports = { main, geraHash }
