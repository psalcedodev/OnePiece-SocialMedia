const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//*Mongoose connection to MongoDB
mongoose
    .connect(
        "mongodb+srv://psalcedo:psalcedo92@cluster0-ibtpy.mongodb.net/smpost?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    userPost: {
        type: String,
        required: true,
    },
    userPostTime: {
        type: String,
        required: true,
    },
});

var User = mongoose.model("User", postSchema);
module.exports = { User: User };
