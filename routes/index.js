import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("inicio");
});

router.get("/nosotros", (req, res) => {
  const viajes = "viaje a lemania psss ";

  res.render("nosotros", {
    viajes,
  });
});

router.get("/contacto", (req, res) => {
  res.send("contacto");
});

export default router;
