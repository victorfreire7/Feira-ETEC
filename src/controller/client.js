const ClientRepository = require('../model/clientsModel');


function main(req, res){
    res.render("main");
}

async function create(req, res) {
    try {
                await ClientRepository.create({
                    nome: req.body.nome,
                    turma: req.body.turma
                }).then(()=>{
                    res.redirect("/games");
                });
        
            } catch (error) {
        
                if(error.name === 'SequelizeUniqueConstraintError'){
                    res.json('erro: email ja utilizado!');
                } else {
                    res.json(error);
                }
        
            }
}

module.exports = { create, main };
