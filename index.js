/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueInput = document.getElementById('input-el')
const convertButton = document.getElementById('button-el')
const lengthDisplay = document.getElementById('length-display')
const volumeDisplay = document.getElementById('volume-display')
const massDisplay = document.getElementById('mass-display')

//convert inserted value to metric and imperial units
function convertNumber(insertedValue) {
    //length
    let calculateFeet = `<span>${(insertedValue * 3.281).toFixed(2)} ft</span>`
    let calculateMeters = `<span>${(insertedValue / 3.281).toFixed(2)} mt</span>`
    lengthDisplay.innerHTML = `
        ${insertedValue} meters = ${calculateFeet}<br>
        ${insertedValue} feet = ${calculateMeters} 
    `

    //volume
    let calculateGallons = `<span>${(insertedValue * 0.264).toFixed(2)} gal</span>`
    let calculateLiters = `<span>${(insertedValue / 0.264).toFixed(2)} l</span>`
    volumeDisplay.innerHTML = `
        ${insertedValue} liters = ${calculateGallons}<br>
        ${insertedValue} gallons = ${calculateLiters} 
    `

    //mass
    let calculatePounds = `<span>${(insertedValue * 2.204).toFixed(2)} lb</span>`
    let calculateKilos = `<span>${(insertedValue / 2.204).toFixed(2)} kg</span>`
    massDisplay.innerHTML = `
        ${insertedValue} kilos = ${calculatePounds}<br>
        ${insertedValue} pounds = ${calculateKilos} 
    `
}

convertButton.addEventListener('click', function () {
    convertNumber(valueInput.value)
})

