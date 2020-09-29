// window.addEventListener('load', start);

function start() {
  var inputPrimeiroNumero = document.querySelector('#primeiroNumero');
  inputPrimeiroNumero.addEventListener('change', calcular);
  inputPrimeiroNumero.value = 0;

  var inputSegundoNumero = document.querySelector('#segundoNumero');
  inputSegundoNumero.addEventListener('change', calcular);
  inputSegundoNumero.value = 0;
}

function calcular() {
  var inputPrimeiroNumero = document.querySelector('#primeiroNumero');
  var a = Number(inputPrimeiroNumero.value);

  var inputSegundoNumero = document.querySelector('#segundoNumero');
  var b = Number(inputSegundoNumero.value);

  document.querySelector('#soma').value = formatNumber(sum(a, b));
  document.querySelector('#sub1').value = formatNumber(sub(a, b));
  document.querySelector('#sub2').value = formatNumber(sub(b, a));
  document.querySelector('#multi').value = formatNumber(multiplication(b, a));
  document.querySelector('#div1').value = div(a, b);
  document.querySelector('#div2').value = div(b, a);
  document.querySelector('#sqrtA').value = formatNumber(sqrt(a));
  document.querySelector('#sqrtB').value = formatNumber(sqrt(b));
  document.querySelector('#divIntA').value = divisors(a);
  document.querySelector('#divIntB').value = divisors(b);
  document.querySelector('#fatA').value = fatorial(a);
  document.querySelector('#fatB').value = fatorial(b);
}

function formatNumber(number) {
  var formated = new Intl.NumberFormat('pt-BR').format(number);
  return Number(formated).toFixed(2);
}

function sum(a, b) {
  return a + b;
}

function sub(number1, number2) {
  return number1 - number2;
}

function multiplication(a, b) {
  return a * b;
}

function div(number1, number2) {
  return number2 === 0 ? 'Divisão por Zero!' : (number1 / number2).toFixed(2);
}

function sqrt(number) {
  return number ** 2;
}

function divisors(number) {
  var divisors = [];
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length > 0) {
    var stringDivisors = '@';
    for (var i = 0; i < divisors.length; i++) {
      stringDivisors += ', ' + divisors[i];
    }
    return stringDivisors.replace('@, ', '') + ' (' + divisors.length + ')';
  } else {
    return 'Incalculável!';
  }
}

function fatorial(number) {
  if (number <= 20) {
    var fat = 1;
    for (var i = number; i > 1; i--) {
      fat *= i;
    }
    return fat;
  } else {
    return 'Valor muito grande!';
  }
}

start();
