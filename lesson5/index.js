const randomFruitsName = require("random-fruits-name")

console.log(randomFruitsName('ja'))
const imageUrl = movieInfo('Avatar')
  .then(response => console.log(response.imageBase + response.poster_path))