const mongoose = require('mongoose')

//connect to database
mongoose.connect('mongodb://localhost:27017/wrestling-wresults', {
    useNewUrlParser: true
    // useCreateIndex: true,
    // useUnifiedTopology: true
});

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});