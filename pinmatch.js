// generate pin 
document.getElementById('pin-generate-btn').addEventListener('click', function(){
    var randomNumber = Math.random() * 9999;
    var output = Math.round(randomNumber) + 1000;
    document.getElementById('ganerated-pin').value = output;
})

//display numbers

function display(value){
    const digits = document.getElementById('numDisplay');
    digits.value = digits.value + value;
}


// match inputs

var attempt = 3;

document.getElementById('submit').addEventListener('click', function(){

    const ganerated = document.getElementById('ganerated-pin').value;
    const displayNumber = document.getElementById('numDisplay').value;
    const correct = document.getElementById('rightPinNotify');
    const wrong = document.getElementById('wrongPinNotify');
    const attemptLeft = document.getElementById('attemtCount');

    if (ganerated == displayNumber){
        correct.style.display = 'block';
        wrong.style.display = 'none';
    }
    else {
        wrong.style.display = 'block';
        correct.style.display = 'none';
        attempt --;          
            attemptLeft.innerText = attempt; 
            if (attempt == 0) {
                document.getElementById('numDisplay').disabled = true;
                document.getElementById('submit').disabled = true;
                alert("No attempt left!")
                return false;
            }
    }

})

// clear inputs

document.getElementById('cal-main').addEventListener('click', function(event){
    const action = event.target.innerText;
    const displayedNum = document.getElementById('numDisplay');
    const typedNum = displayedNum.value;

    if (action == '<'){
        const digit = typedNum.split('');
        digit.pop();
        const remainingNum = digit.join('');
        displayedNum.value = remainingNum;
    }
    else if(action == 'C'){
        displayedNum.value = '';
    }
})