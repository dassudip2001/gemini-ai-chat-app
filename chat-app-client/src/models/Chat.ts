import mongoose from "mongoose";

export interface IChat {
  userInput: string;
  botReply: string;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const chatSchema = new mongoose.Schema<IChat>(
  {
    userInput: { type: String, required: true },
    botReply: { type: String, required: true },
  },
  { timestamps: true }
);

const Chat = mongoose.models?.Chat || mongoose.model<IChat>("Chat", chatSchema);

export default Chat;
