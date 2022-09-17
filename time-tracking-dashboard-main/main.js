import data from './data.json' assert {type: 'json'};

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section')

dailyBtn.addEventListener('click', ()=>{
    data.forEach( element=>{
        console.log(element)
        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background">
            <img class="card__image" src="./images/icon-work.svg" alt="">
            </div>
            <div class="card__details">
            <div class="card__activity">
                <p class="card__title">Work</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__time">
                <p class="card__hour">5hrs</p>
                <p class="card__previous">Previous - 7hrs</p>
            </div>
            </div>
        </div>
      `
    })
})