
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
  try {
    // Obtener todos los usuarios de la base de datos
    const purchases = await PurchaseModel.find();
    
    console.log(purchases);


    const grouped= transformData(purchases);

    console.log(grouped);

    // Enviar una respuesta al cliente
    res.status(200).json(grouped);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

const transformData = (input) => {
  const groupedData = {};

  input.forEach((items, index) => {
    console.log('items', items);
    

    const publicIp = items.publicIp;
    const userToken = items.userToken;
    const productToken = items.productToken;
    if (!groupedData[publicIp]) {
    
      groupedData[publicIp] = {
        key: String(index + 1),
        PublicIp: publicIp,
        children: [],
      };
    }

    groupedData[publicIp].children.push({
      key: String(index + 30),
      UserToken: userToken,
      ProductToken: productToken,
      ProductName: "ProductName",
    });
  });

  return Object.values(groupedData);
};
