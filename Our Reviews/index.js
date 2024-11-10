let left = document.getElementById("left");
let right = document.getElementById("right");
let author= document.getElementById("author");
let position= document.getElementById("position");
let info= document.getElementById("info");
let image= document.getElementById("image");

class Employee{
    constructor(emp_name, emp_position, emp_info){
        this.emp_name = emp_name;
        this.emp_position = emp_position;
        this.emp_info = emp_info;
    }
}

const person1 = new Employee("Rishita Chakravorty", "Web Develepor","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, et.");
const person2 = new Employee("Sneha Chakravorty", "Web Develepor","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, et.");
const person3 = new Employee("Sushmita Chakravorty", "Web Develepor","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, et.");
const person4 = new Employee("Swaroop Chakravorty", "Web Develepor","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, non?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, et.");

let person = [person1,person2,person3,person4];
let count = 0;
left.onclick = function(){
    count--;
    image.innerHTML = `<img src= "img/${count+1}.png">`;
    author.textContent = `${person[count].emp_name}`;
    position.textContent =  `${person[count].emp_position}`;
    info.textContent =  `${person[count].emp_info}`;
}
right.onclick = function(){
    count++;
    if(count>3||count<0){
        count=0;
    }
    image.innerHTML = `<img src= "img/${count+1}.png">`;
    author.textContent = `${person[count].emp_name}`;
    position.textContent =  `${person[count].emp_position}`;
    info.textContent =  `${person[count].emp_info}`;
}