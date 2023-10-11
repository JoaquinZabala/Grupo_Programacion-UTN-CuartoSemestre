import  Router  from "express-promise-router";
import {actualizarTarea, crearTarea, eliminarTarea, listarTarea, listarTarea} from "../controllers/tarea.controller.js"

const router = Router();

router.get('/tareas',listarTarea);

router.get('/tareas/:id',listarTarea);

router.post('/tareas',crearTarea)

router.put('/tareas/:id',actualizarTarea);

router.delete('/tarea/:id',eliminarTarea );

export default router;
