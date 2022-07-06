import financialEventsRepository from "./../repositories/financialEventsRepository.js";

async function postFinancialEvent( userId, value, type ) {
    if (!value || !type) {
        throw {type: 'Unprocessable Entity'};
      }
  
      const financialTypes = ["INCOME", "OUTCOME"];
      if (!financialTypes.includes(type)) {
        throw {type: 'Unprocessable Entity'};
      }
  
      if (value < 0) {
        throw {type: 'Unprocessable Entity'};
      }
  
    return await financialEventsRepository.insertFinancialEvent(userId, value, type);
}

async function listFinancialEvents( userId ){
    return await financialEventsRepository.getFinancialEvents(userId);
}

async function sumFinancialEvents( userId ){
    const events = await financialEventsRepository.getFinancialEvents(userId);
    
    const sum = events.rows.reduce(
        (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );

    return sum;
}

export {
    postFinancialEvent,
    listFinancialEvents,
    sumFinancialEvents
}