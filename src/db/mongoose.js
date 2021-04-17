const mongoose = require('mongoose')
//
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })


mongoose.connect('mongodb+srv://vatsal:vatsal@cluster0.sayfn.mongodb.net/binge?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})