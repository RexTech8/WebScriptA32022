let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const airplanes = require('../models/airplane');


//connect with airplane model

let Airplane = require('../models/airplane');
let airplaneController = require ('../controller/airplane');
/* CRUD Operation */

/* Read Operations */
/* Get route for the airplane list */

router.get('/', airplaneController.displayAirplaneList);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add', airplaneController.displayAddPage);

/* Post route for processing the Add-Page -- Create Operation */
router.post('/add', airplaneController.processAddPage);

/* Edit Operation */
/* Get route for displaying the Edit-Page -- Update Operation */
router.get('/edit/:id', airplaneController.displayEditPage);
/* Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', airplaneController.processEditPage);

/* Delete Operation */
/* Get to perform Delete Operation -- Deletion */
router.get('/delete/:id', airplaneController.performDelete);



module.exports=router;