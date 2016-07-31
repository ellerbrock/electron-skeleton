const $ = require('jQuery');
const dragDrop = require('drag-drop')

dragDrop('.main', function (files) {
  console.log('Dropped files: ', files)

  // `files` is an Array!
  files.forEach(function (file) {

    $('.log').append(`<li><strong>Name: ${file.name}</strong></li>`)
    $('.log').append(`<li>Size: ${file.size} Byte</li>`)
    $('.log').append(`<li>Type: ${file.type}</li>`)
    $('.log').append(`<li class="last">Path: ${file.fullPath}</li>`)

    /*
    // convert the file to a Buffer that we can use!
    const reader = new FileReader()
    reader.addEventListener('load', function (e) {
      // e.target.result is an ArrayBuffer
      let arr = new Uint8Array(e.target.result)
      let buffer = new Buffer(arr)

      // do something with the buffer!
    })
    reader.addEventListener('error', function (err) {
      console.error('FileReader error' + err)
    })
    */

    reader.readAsArrayBuffer(file)
  })
})
