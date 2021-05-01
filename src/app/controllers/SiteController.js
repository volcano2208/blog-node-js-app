const Course = require('../models/Course');
class SiteController {
    // [GET] /home
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'Error' });
            }
        })
        // res.render('home');
    }
}
module.exports = new SiteController;