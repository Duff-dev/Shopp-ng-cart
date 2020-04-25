const whiteHeart = '\u2661'; 
const blackHeart = '\u2665'; 
const heart = document.querySelectorAll('.heart'); 

for(let i=0; i<heart.length; i++) {    
    heart[i].addEventListener('click', () => {
        const like = heart[i].textContent; 
        console.log(like);
        if(like==whiteHeart) { 
            heart[i].textContent = blackHeart; 
        } else { 
            heart[i].textContent = whiteHeart; 
        } 
    
    }); 
} 

const buttons = document.getElementsByTagName('button');


for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let button = buttons[i];
        button.parentElement.remove();
        inputChange();
    })
}


let quantities = document.querySelectorAll('.quantity');

for (i=0; i<quantities.length; i++) {
    quantities[i].addEventListener('change', () => {              
        inputChange();
        quantityChange();
    })
}

function quantityChange() {
    for(i=0; i<quantities.length; i++){
        let input = quantities[i];
        if (isNaN(input.value) || input.value <= 0 ) {
            input.value = 1;
            inputChange()
        }  
    }
}

function inputChange() {
    let prices = document.querySelectorAll('.price');
    let quantities = document.querySelectorAll('.quantity'); 
    let total = document.querySelectorAll('.total');
    let totalBascket = 0;


    for(i=0; i<prices.length; i++) {
        let price = parseFloat(prices[i].innerText.replace('$',''));
        let quantity = parseFloat(quantities[i].value);
        total[i].innerText = '$' + price * quantity + ',00';
        totalBascket += price * quantity;               
    }    
    document.querySelector('.bascket-total-price').innerText ='$' + totalBascket + ',00';
}

inputChange();