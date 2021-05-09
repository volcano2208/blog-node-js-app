const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET] / me/stored/courses
    storedCourse(res,req) {
        res.render('me/stored-courses');
    }
}
module.exports = new MeController;