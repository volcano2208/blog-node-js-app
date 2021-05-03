const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
}
module.exports = new CourseController;