    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.minute-hand')
    let hourHand = document.querySelector('.hour-hand')

function setClock() {

    let currentDate = new Date()

    let secondsRatio = currentDate.getSeconds();
    let minutesRatio = currentDate.getMinutes();
    let hoursRatio = currentDate.getHours();

    let secondsDegree = (((secondsRatio / 60) * 360));
    let minutesDegree = (((minutesRatio / 60) * 360));
    let hoursDegree = (((hoursRatio / 60) * 360));

    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

};

setInterval (setClock, 1000);