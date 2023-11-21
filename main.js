let numeros = [];

function agregarNumero() {
  const inputNumero = document.getElementById('numero');
  const numero = parseInt(inputNumero.value);

  numeros.push(numero);

  actualizarTabla();
  inputNumero.value = '';
}

function actualizarTabla() {
  const cuerpoTabla = document.getElementById('cuerpoTabla');
  cuerpoTabla.innerHTML = '';

  numeros.forEach((numero, index) => {
    const fila = cuerpoTabla.insertRow();
    const celdaNumero = fila.insertCell(0);
    const celdaPosicion = fila.insertCell(1);

    celdaNumero.textContent = numero;
    celdaPosicion.textContent = index + 1;
  });
}

function procesarNumeros() {
  const sumaTotal = numeros.reduce((acc, numero) => acc + numero, 0);
  const promedio = sumaTotal / numeros.length;
  const maximo = Math.max(...numeros);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <p>Suma total: ${sumaTotal}</p>
    <p>Promedio: ${promedio.toFixed(2)}</p>
    <p>Máximo: ${maximo}</p>
  `;
}