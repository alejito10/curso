
const Udemy = require('../models/Udemy');
const udemyController = {

    home : function (req,res) {
        return res.status(200).send({
            message:'hola soy la home'
        });
    },
    test: function (req,res) {
        return res.status(200).send({
            message:'hola soy test'
        });
    },
    saveProject:function (req,res) {
        var udemy = new Udemy();
        var params = req.body;
        udemy.name = params.name;
        udemy.year = params.year;
        udemy.hobbis = params.hobbis;
        udemy.image = null;
        //guarda los datos en la base de datos
        udemy.save((err,udemyStored)=>{
            if (err) return res.status(500).send({message:'error al guardar el documento'});
            if (!udemyStored) return res.status(404).send({message:'no se puede guardar el documento'});
            return res.status(200).send({udemy:udemyStored});
        })
    },
    //metodo para devolver un elemento de la base de datos
    getProject:function (req,res) {
        var prejectId=req.params.id;
        Udemy.findById(prejectId,(err,project)=>{
            if (err) return res.status(500).send({message:'error al devolver el dato'});
            if (!project) return res.status(404).send({message:'el proyecto no existe'});
            return res.status(200).send({
                project
            });
        })
    },
    //metodo para devolver todos los elementos de la base de datos
    getProjects:function (req,res) {
        Udemy.find({}).exec((err,project)=>{
            if (err) return res.status(500).send({message:'error al devolver el dato'});
            if (!project) return res.status(404).send({message:'el proyecto no existe'});
            return res.status(200).send({project});
        })
    },
    //metodo para actualizar un dato
    updateProject:function (req,res) {
        var projectId = req.params.id;
        var update = req.body;
        Udemy.findByIdAndUpdate(projectId, update,{new:true},(err,projectUpdate)=>{
            if (err) return res.status(500).send({message:'error al devolver el dato'});
            if (!projectUpdate) return res.status(404).send({message:'el proyecto no existe'});
            return res.status(200).send({udemy:projectUpdate})
        })
    },
    //metodo para eliminar un dato
    deleteProject:function (req,res) {
        var projectId = req.params.id;
        Udemy.findByIdAndRemove(projectId,(err,projectDelete)=>{
            if (err) return res.status(500).send({message:'error al devolver el dato'});
            if (!projectDelete) return res.status(404).send({message:'el proyecto no existe'});
            return res.status(200).send({udemy:projectDelete})
        })
    },
    uploadImage:function (req,res) {
        const projectId = req.params.id;
        let fileName = 'imagen no subida...';

        if (req.files){
            const filePath = req.files.image.path;
            const fileSplit = filePath.split('/');
            fileName = fileSplit[1];

            Udemy.findByIdAndUpdate(projectId,{image:fileName},{new:true},(err, projectUpdate)=>{
                if (err) return res.status(500).send({message:'error al devolver el dato'});
                if (!projectUpdate) return res.status(404).send({message:'el proyecto no existe'});
                return res.status(200).send({
                    udemy:projectUpdate
                });
            });

        }else {
            return res.status(200).send({
                message:fileName
            });
        }
    }
};




module.exports = udemyController;