import express from 'express'

export const rutasAPI = express.Router();

rutasAPI.get('/habitaciones', (req,res)=> res.send('endpoint todas las habitaciones, metodo get'))

rutasAPI.post('/habitaciones', (req,res)=> res.send('endpoint habitaciones, metodo post'))

rutasAPI.get('/habitacion', (req,res)=> res.send('endpoint habitacion, metodo get'))

rutasAPI.put('/habitaciones', (req,res)=> res.send('endpoint habitaciones, metodo put'))

rutasAPI.delete('/habitaciones', (req,res)=> res.send('endpoint habitaciones, metodo delete'))