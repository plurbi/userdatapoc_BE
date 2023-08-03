
import PurchaseModel  from '../models/purchaseModel.js'

export const add = async (req, res) => {
  try {
    const { email, publicIp, productToken, userToken } = req.body;
    console.log('DATA => ', email, publicIp, productToken, userToken );
    const newPurchase = new PurchaseModel({ email, publicIp, productToken, userToken  });

    newPurchase.save();

    res.status(200).json({ message: "Purchase controller" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export const get = async (req, res) => {
  res.send([{}]);
}
