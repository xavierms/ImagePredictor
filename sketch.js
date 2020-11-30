let mobilenet
let img
let label;


function setup() {
  let c = createCanvas(500, 500);
  console.log("ML5 Version: " + ml5.version)
  mobilenet = ml5.imageClassifier('mobileNet', mobilenetReady)
  c.drop(archivoRecibido);
  label=createDiv('')
  background("white")
}

function mobilenetReady() {
  console.log('Predictor listo!..')
}

function archivoRecibido(archivo) {
  console.log('Nombre archivo: ' + archivo.name)
  img = createImg(archivo.data, visualiza_archivo).hide()
}

function visualiza_archivo(archivo) {
  image(img, 0, 0, width, height);
  predecir_imagen()
}

function predecir_imagen() {
  mobilenet.predict(img, function(err, results) {
    label.html(results[0].label)
    
  })
}