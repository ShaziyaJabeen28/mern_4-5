const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shaaz:shaaz@cluster0.xpvx2.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => { 
        console.log(err);
    })