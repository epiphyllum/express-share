module.exports = function(app) {
    "use strict";
    app.get("/modulea", function(req, res){
        res.send("modulea is called");
    })
}