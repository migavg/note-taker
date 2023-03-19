const clog = (req, res, next) => {
    switch (req.method) {

        case "GET" : {
            console.info(`${req.method} request to ${req.path}`);
            break;
        }
        case "POST" : {
            console.info(`${req.method} request to ${req.path}`);
            break;
        }
        case "DELETE" : {
            console.info(`${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.info(`${req.method} request to ${req.path}`);
            break;
    }
    next();
}

exports.clog = clog;