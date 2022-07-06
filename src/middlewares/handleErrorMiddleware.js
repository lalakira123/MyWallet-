export default function handleError( error, req, res, next) {
    console.log(error);
    
    if( error.type === 'Unprocessable Entity' ) {
        res.sendStatus(422);
    }

    if( error.type === 'Conflict' ) {
        res.sendStatus(409);
    }

    if( error.type === 'Unauthorized' ) {
        res.sendStatus(401);
    }

    res.sendStatus(500);
}