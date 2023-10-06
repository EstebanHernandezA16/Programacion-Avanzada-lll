import express from 'express'
import { HabitacionController } from '../controllers/HabitacionController.js';

export const rutasAPI = express.Router();

const controlador = HabitacionController()

rutasAPI.get('/habitaciones', controlador.buscarTodas(req,res))

rutasAPI.post('/habitaciones', (req,res)=> res.send('endpoint habitaciones, metodo post'))

rutasAPI.get('/habitacion/:id', (req,res)=> res.send('endpoint habitacion, metodo get'))

rutasAPI.put('/habitaciones/:id', (req,res)=> res.send('endpoint habitaciones, metodo put'))

rutasAPI.delete('/habitaciones/:id', (req,res)=> res.send('endpoint habitaciones, metodo delete'))