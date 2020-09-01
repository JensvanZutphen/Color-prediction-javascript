let model;
let targetlabel;
let trainingdata = [];

function setup(){
    let options = {
    inputs: ['x'],
    outputs: ['label'],
    task: 'clasification',
    debug: true,
    epochs: 100,
  }
  model = ml5.neuralNetwork(options);
  background(255);

const array = [
    [255,255,255,'black'],
    [0,0,0,'white'],
    [0,4,2,'white'],
    [255,0,0,'white'],
  ];
}

`Krijg de kleur niet geimporteert in x`
function mousePressed() {
    let inputs = {
      x: color = document.getElementById('favcolor'),
    }
    let target = {
      label: array
    }
    model.addData(inputs,target);
    model.train
}




function keyPressed() { 
  if (key == 't') {
    console.log('Starting training:'),
    model.normalizeData(),
    model.train(options, whileTraining, finishedTraining);
  }
}

function whileTraining(epochs, loss) {
  console.log(epoch);
}

function finishedTraining() {
  console.log('finished training.')
}