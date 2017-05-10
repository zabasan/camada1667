/**
 * Ejemplos de Moongose.
 * */

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/camada1667');

// Defino os datos que va llevar mi modelo.
let PersonSchema = mongoose.Schema({
    name: String,
    dni: Number,
    lastname: String,
    nationality: String
});

// Agrego Metodos al schema
PersonSchema.methods.fullname = function(){
    return this.name + ' ' + this.lastname;
};

// Deifno mi modelo
let Person = mongoose.model('Person', PersonSchema);

let persona = new Person({
    name : 'Juan',
    dni : 100,
    lastname: 'Perez',
    nationality: 'Argentino'
});

let persona2 = new Person({
    name : 'Pedro',
    dni : 100,
    lastname: 'Gonzales',
    nationality: 'Argentino'
});

console.log(persona.fullname());

persona.save();
persona2.save();//*/

/*Person.find()
    .then(persons => {
        console.log(persons);
    });//*/

/*Person.findById('59125d769e90e61c56ace0b3')
    .then(persons => {
        console.log(persons);
    });//*/

/*Person.findOneAndUpdate({name: 'Pedro'}, { dni: 101})
    .then(persons => {
        console.log(persons);
    });//*/

/*Person.remove({ dni: 101 }).then(persons => {
    console.log(persons);
});//*/