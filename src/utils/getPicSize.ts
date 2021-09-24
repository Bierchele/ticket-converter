const url = require('url')
const http = require('https')
const sizeOf = require('image-size')
const imgUrl = 'https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/qrcode.gif '
const options = url.parse(imgUrl)

export const getSize = () => {
  http.get(options, function (response: { on: (arg0: string, arg1: (chunk: any) => void) => { (): any; new(): any; on: { (arg0: string, arg1: () => void): void; new(): any } } }) {
    let chunks: any[]
    response.on('data', function (chunk: any) {
      chunks.push(chunk)
    }).on('end', function() {
      const buffer = Buffer.concat(chunks)
      console.log(sizeOf(buffer))
    })
  })
} 

// lokal speichern
