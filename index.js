var base64Img = require('base64-img');
var fs = require("fs");
var ba64 = require("ba64");

base64Img.base64('image/demo1.jpg', function(err, data) {
    if (err) { console.error(err); }
    WriteImage(data); //เขียนไฟล์ รูป
});

function WriteImage(data) {
    // save the image asynchronously.
    var imgName = "Demo" + "_" + Date.now();
    ba64.writeImage("out/" + imgName, data, function(err) {
        if (err) throw err;
        console.log("Image saved successfully");
        // do stuff
    });
}