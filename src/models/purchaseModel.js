// src/models/userModel.js
import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: false },
  publicIp: { type: String, required: true, unique: false },
  productToken: { type: String, required: true, unique: false },
  userToken: { type: String, required: false, unique: false },
});

const PurchaseModel = mongoose.model('purchase', purchaseSchema);

export default PurchaseModel;