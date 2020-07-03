const bcrypt = require("bcrypt");

//console.log(bcrypt);

const password = "1234Seguro!";

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        console.log("Error: " + err);
        console.log("Response: " + res);
    })
});

