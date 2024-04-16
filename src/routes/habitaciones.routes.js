import { Router } from "express";
import {
  borrarHabitacion,
  crearHabitacion,
  editarHabitacion,
  listarHabitaciones,
  obtenerHabitacion,
} from "../controllers/habitaciones.controllers.js";
import { check } from "express-validator";
import validacionHabitacion from "../helpers/validacionHabitacion.js";


const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
   .post([validacionHabitacion],crearHabitacion);

router
  .route("/habitaciones/:id")
  .get(obtenerHabitacion)
   .put([validacionHabitacion],editarHabitacion)

  .delete(borrarHabitacion);

export default router;
