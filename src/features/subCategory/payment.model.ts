import { model, Schema, Document } from "mongoose";

const paymentSchema = new Schema({});

const paymentModel = model<Document>("Payment", paymentSchema);

export default paymentModel;
