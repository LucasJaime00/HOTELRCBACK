import { Router } from "express";
import { crearUsuario, login, obtenerUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/nuevo").post(crearUsuario);
router.route('/').get(obtenerUsuarios).post(login)
export default router;