var textInput = document.querySelector('#input-texto');
var outInput = document.querySelector('#output');

function criptografar() {
  var texto = textInput.value.toLowerCase();
  var resultCripto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
    .normalize('NFD')
    .replace(/\p{Mn}/gu, '');

  document.getElementById('output').innerHTML =
    '</div><textarea readonly id="texto">' +
    resultCripto +
    '</textarea>' +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
  var texto = textInput.value;
  var resultDescripto = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.getElementById('output').innerHTML =
    '<textarea readonly id="texto">' +
    resultDescripto +
    '</textarea>' +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

// COPIA OUTPUT

function copiar() {
  var textoCop = document.getElementById('texto');

  textoCop.select();
  document.execCommand('copy');
}


