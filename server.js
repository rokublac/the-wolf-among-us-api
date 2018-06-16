const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);

// 404 error request
router.render = (req, res) => {
	if (res.statusCode == 404){
		res.status(404).jsonp({
			errorCode: 404,
 			description: "Not found"
  		});
	} else  {
		res.jsonp({
			statusCode: res.statusCode,
    		body: res.locals.data
  		});
	}
};