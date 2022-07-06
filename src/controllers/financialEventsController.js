import * as financialEventService from './../services/financialEventService.js';

export async function postFinancialEvent(req, res){
        const user = res.locals.user;
        const { value, type } = req.body;
    
        await financialEventService.postFinancialEvent(user.id, value, type);
    
        res.sendStatus(201);
}

export async function listFinancialEvents(req, res){
        const user = res.locals.user;

        const events = await financialEventService.listFinancialEvents(user.id);
    
        res.send(events.rows);
}

export async function sumFinancialEvents(req, res){
        const user = res.locals.user;
    
        const sum = await financialEventService.sumFinancialEvents(user.id);
    
        res.send({ sum });
}