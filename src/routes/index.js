const siteRouter = require('./sites');
const coursesRouter = require('./courses');
function route(app) {
    app.use('/', siteRouter);
    app.use('/courses', coursesRouter);
}
module.exports = route;