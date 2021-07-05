var inputElement = document.querySelector('.input')
var outputElement = document.querySelector('.output')
inputElement.onkeyup = function(e){
    console.log(e.key);
}

var btn = document.querySelectorAll('.item')
btn.onclick= function(e){
    const key  = e.target.dataset.btn
    console.log(key);
}
let input_text =""

let output_text=0


var arrayLength = btn.length
for (let i = 0; i < arrayLength; i++) {
    btn[i].onclick = function(e){
        if (e.target.value == 'undefined') {
            e.target.value = ''
        }
         input_text= input_text + e.target.value
        switch (e.target.value) {
            case 'del':
                input_text = input_text.substring(0,input_text.length -4)  
                
                break;
            case 'c':
                input_text =''
                output_text = 0
                outputElement.textContent = output_text
                break;
            case '=' :
                console.log('click =');
                input_text = input_text.substring(0,input_text.length -1)  
                output_text = eval(input_text) 

                console.log(`kq = ${output_text}`);
                outputElement.textContent = output_text.toFixed(3) 
                break;  
        }
    
         
    inputElement.setAttribute('value',input_text)    
       

               
    //outputElement.textContent = output_text.toFixed(3)   
       
    
   } 
} 




