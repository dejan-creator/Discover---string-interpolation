'use strict';

const employee = {
    first_name: 'Alfred',
    last_name: 'Pennyworth',
    age: 67,
    occupation: 'butler',
    place_of_residence: 'Gotham',
    photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
};

const employees = document.querySelector(".employees");

employees.innerHTML += `<div class="employee">
    <div class="employee__photo">
        <img src="${employee.photo_url}" alt="${employee.first_name} ${employee.last_name}">
    </div>
    <div class="employee_info">
        <div class="employee__full-name">${employee.first_name} ${employee.last_name}</div>
        <div class="employee__occupation">${employee.occupation}</div>
        <div class="employee__residence">Last known place of residence: ${employee.place_of_residence}</div>
        <div class="employee__age">Age: ${employee.age}</div>
    </div>
</div>`;


// const first_name = 'Alfred'
// const last_name = 'Pennyworth'
// const age = '67'    
// const occupation = 'butler'
// const place_of_residence = 'Gotham'
// const photo_url = 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg';










