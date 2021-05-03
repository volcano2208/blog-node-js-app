const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] / detail course / :slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //[GET] / create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] / create
    store(req, res, next) {
        // res.json(req.body);
        const course = new Course(req.body);
        course.save()
            .then(() => {
                res.redirect(`/`);
            })
            .catch(next);
    }
}
module.exports = new CourseController;