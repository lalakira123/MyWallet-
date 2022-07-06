import connection from "./../database.js";

async function insertFinancialEvent( userId, value, type ){
    return await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
      );
}

async function getFinancialEvents( userId ){
    return await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [userId]
      );
}

const financialEventsRepository = {
    insertFinancialEvent,
    getFinancialEvents
}

export default financialEventsRepository;