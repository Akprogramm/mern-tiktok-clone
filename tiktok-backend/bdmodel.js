const mongoose=require("mongoose");

const tiktokSchema=mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    comment: String,
   share: String,
});

 module.exports=mongoose.model("tiktokVideos",tiktokSchema);