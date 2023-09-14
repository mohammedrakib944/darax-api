import { model, Schema, Document } from "mongoose";

const ordersSchema = new Schema({});

const orderModel = model<Document>("Order", ordersSchema);

export default orderModel;
