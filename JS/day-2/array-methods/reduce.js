async (handlerFunction) => {
    return (req, res, next) => {
        Promise.resolve(handlerFunction(req, res, next)).catch(next);
    }
}

const fn = (handlerFunction) => (req, res, next) => { 
    Promise.resolve(handlerFunction(req, res, next)).catch(next)
}