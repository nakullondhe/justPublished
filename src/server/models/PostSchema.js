const { model, Schema} = require("mongoose");

const PostSchema = new Schema({
  imageURL: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  scheduled: {
    type: Boolean,
    default: false,
  },
  scheduledDate: {
    type: Date,
  },
  posted: {
    type: Boolean,
    default: false,
  },
  postedDate: {
    type: Date,
  },
}, { timestamps: true});

module.exports = model("Post", PostSchema);