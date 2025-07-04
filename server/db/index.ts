import mongoose, { mongo } from "mongoose";
// Define mongoose schemas

mongoose.connect('mongodb+srv://admin:ShahbazRoxx%40123@cluster0.cwvzgop.mongodb.net', { dbName: "todo" });
const todoSchema = new mongoose.Schema({
    title: {type: String},
    description: String,
    done: Boolean,
    userId: String
  });

const userSchema = new mongoose.Schema({
  username: {type: String},
  password: String,
});
  
export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);

  