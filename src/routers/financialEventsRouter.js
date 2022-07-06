import { Router } from 'express';
import validateToken from './../middlewares/validateTokenMiddleware.js';
import { postFinancialEvent, listFinancialEvents, sumFinancialEvents } from './../controllers/financialEventsController.js';

const financialEventsRouter =  Router();

financialEventsRouter.use(validateToken);
financialEventsRouter.post("/financial-events", postFinancialEvent);
financialEventsRouter.get("/financial-events", listFinancialEvents);
financialEventsRouter.get("/financial-events/sum", sumFinancialEvents);

export default financialEventsRouter;