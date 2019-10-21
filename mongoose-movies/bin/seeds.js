const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });

const aux = [
  {
    name: 'TestOne',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin consectetur libero vitae vehicula. Etiam at accumsan felis. Nulla egestas nisl at mattis laoreet. Curabitur ligula mi, laoreet eu odio vel, varius varius mauris. Quisque congue eget dolor sit amet placerat. Aliquam erat volutpat. Vestibulum nec vestibulum elit, vel cursus dui. Donec scelerisque placerat sapien eget mollis.'
  },
  {
    name: 'TestTwo',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin consectetur libero vitae vehicula. Etiam at accumsan felis. Nulla egestas nisl at mattis laoreet. Curabitur ligula mi, laoreet eu odio vel, varius varius mauris. Quisque congue eget dolor sit amet placerat. Aliquam erat volutpat. Vestibulum nec vestibulum elit, vel cursus dui. Donec scelerisque placerat sapien eget mollis.'
  },
  {
    name: 'TestThree',
    occupation: 'actor',
    catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin consectetur libero vitae vehicula. Etiam at accumsan felis. Nulla egestas nisl at mattis laoreet. Curabitur ligula mi, laoreet eu odio vel, varius varius mauris. Quisque congue eget dolor sit amet placerat. Aliquam erat volutpat. Vestibulum nec vestibulum elit, vel cursus dui. Donec scelerisque placerat sapien eget mollis.'
  },
];

let insertCelebrities = (arr)=> {
  Celebrity.insertMany(arr)
    .then(celebrity=> { console.log('The user is saved and its value is: ', celebrity) })
    .catch(err => { console.log('An error happened:', err)})};

