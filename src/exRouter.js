var express = require('express'),
    router = express.Router();
module.exports = function(app) {
    app.use('/api', router);
};
router.all('/test', function(req, res) {
    res.json({ 'test': 1321 });
});