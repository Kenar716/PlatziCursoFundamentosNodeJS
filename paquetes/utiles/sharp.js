const sharp = require("sharp");

// sharp("original.png")
//     .resize(80)
//     .toFile("resized.png");

sharp("original.png")
    .resize(80)
    .grayscale()
    .toFile("resizedGray.png");