// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function getInfo() { return document.getElementById('info') }

function info(msg) { getInfo().value = msg }

function actionDirToPdf() {
  let inputDir = document.querySelector('#inputDir').files[0].path
  const process = require('child_process')

  var convertCmd = process.spawn('./dirToPdf.sh', [inputDir])
  convertCmd.stdout.on('data', data => console.log('' + data))
  convertCmd.stderr.on('data', data => {
    const msg = '' + data
    info('Erreur :\n' + msg)
    console.error(msg)
  })
  convertCmd.on('close', function(code) {
    if (code == 0)
      info('PDF créé avec succès')
  })
}

document.querySelector('#actionDirToPdf').addEventListener('click', actionDirToPdf)
