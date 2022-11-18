let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const airplanes = require('../models/airplane');

//connect with airplane model

let Airplane = require('../models/airplane');

/* CRUD Operation */

module.exports.displayAirplaneList = (req,res,next)=>{
    Airplane.find((err, airplanelist)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(booklist);
            res.render('airplane/list', {
                title: "Airplane List",
                Airplanelist: airplanelist
            })
        }
    });
}

//Add operation
module.exports.displayAddPage = (req,res,next)=> {
    res.render('airplane/add', {title: 'Add Airplane'})
}

//Add process
module.exports.processAddPage =  (req,res,next)=> {
    let newAirplane = Airplane ({
        "name": req.body.name, 
        "type": req.body.type,
        "manufacturer": req.body.manufacturer, 
        "cost": req.body.cost
    });
    Airplane.create(newAirplane, (err, Airplane)=> {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/airplanelist')
        }
    
    });
}

//Edit operation
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Airplane.findById(id,(err,airplaneToEdit)=>{
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('airplane/edit', {title:'Edit Airplane', airplane: airplaneToEdit});
        }
    });
}

//Edit process 
module.exports.processEditPage =  (req,res,next)=> {
    let id=req.params.id;
    let updateAirplane = Airplane ({
        "_id":id,
        "name": req.body.name, 
        "type": req.body.type,
        "manufacturer": req.body.manufacturer, 
        "cost": req.body.cost
    });
    Airplane.updateOne({_id:id},updateAirplane, (err) =>{
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/airplanelist')
        }
    });
}

//Delete Operation
module.exports.performDelete = (req,res,next)=> {
    let id=req.params.id;
    Airplane.deleteOne({_id:id}, (err)=>{
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/airplanelist')
        }
    })
}