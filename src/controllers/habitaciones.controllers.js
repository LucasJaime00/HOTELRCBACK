import { validationResult } from "express-validator";
import Habitacion from "../database/models/habitacion.js";

export const listarHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se pudo obtener la lista de habitaciones",
    });
  }
};

export const crearHabitacion = async (req, res) => {
  try {
  

    const habitacionNuevo = new Habitacion(req.body);
    
    await habitacionNuevo.save();
    //enviar la respuesta al front
    res.status(201).json({
      mensaje: "La habitacion fue creada correctamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: "la habitacion no pudo ser dado de alta",
    });
  }
};

export const obtenerHabitacion = async (req, res) => {
  try {
    
    console.log(req.params.id);
    
    const habitacionBuscado = await Habitacion.findById(req.params.id);
    
    res.status(200).json(habitacionBuscado);
  } catch (error) {
    console.error(error);
    res.status(404).json({ mensaje: "No se encontro la habitacion buscado" });
  }
};

export const editarHabitacion = async (req, res) => {
  try {
   
    const habitacionBuscado =  await Habitacion.findById(req.params.id);
    
    if(!habitacionBuscado){
       
        return res.status(404).json({mensaje: "la habitacion no fue encontrada."});
    }
    
    await Habitacion.findByIdAndUpdate(req.params.id, req.body);
  
    res.status(200).json({mensaje: "La habitacion fue editada correctamente"})
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: "Ocurrio un error al editar la habitacion"})
  }
};

export const borrarHabitacion = async (req, res) => {
  try {
    const habitacionBuscado =  await Habitacion.findById(req.params.id);
    
    if(!habitacionBuscado){
        
        return res.status(404).json({mensaje: "La habitacionno fue encontrada."});
    }
    
    await Habitacion.findByIdAndDelete(req.params.id);
   
    res.status(200).json({mensaje: "La habitacion fue borrada correctamente"})
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: "Ocurrio un error al borrar la habitacion"})
  }
};
