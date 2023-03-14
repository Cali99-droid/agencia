import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
const app = express();

//conectar db
db.authenticate()
  .then(() => console.log("conectada bd"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 4000;
//habilitar pug
app.set("view engine", "pug");

//obtener año actual

app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

//definir carpeta publica
app.use(express.static("public"));

//agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`el server esta corriendo en el puerto: ${port}`);
});
