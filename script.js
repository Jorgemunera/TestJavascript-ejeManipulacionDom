const h1=document.querySelector('h1');
const form=document.querySelector('#form')
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const presult=document.querySelector('#result');

//ahora lo que queremos es escuchar lo que pase con nuestros inputs o botones

/* form.addEventListener('submit', sumarImputValues)

function sumarImputValues(event){
    console.log({event});
    event.preventDefault();
    const sumainputs = input1.value + input2.value
    presult.innerText = "RESULTADO: " + sumainputs
} */

btn.addEventListener('click', sumarImputValues)

function sumarImputValues(){
    const sumainputs = input1.value + input2.value
    presult.innerText = "RESULTADO: " + sumainputs
}