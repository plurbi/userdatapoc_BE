// src/index.js
import app from "./app.js"; 
import connectDB from "./db.js";
const PORT = process.env.PORT || 3001; 
// Conectarse a la base de datos de MongoDB
connectDB();
 
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
