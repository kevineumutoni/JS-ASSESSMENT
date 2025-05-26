//QUESTION 1

const { resolve } = require("path");

class CustomerOrder{
    constructor(orderId, items, status){
        this.orderId=orderId;
        this.items=items;
        this.status= status;
    }

        calculateTotal= ()=>{
               let total = 0
            for (let i=0;i<this.items.length; i++){
             
                    total = this.items[i].quantity* this.items[i].price
            }
            return total
            
        }
      

        
          async processPayment(){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    this.status = "paid";
                    console.log("payment successful");
                    resolve();
                    
                }, 2000);
            });
    }
}
let customer= new CustomerOrder("1",  [
    {name:"soap", quantity:4, price:200},
    {name:"hair products", quantity:10, price:400},
    {name:"marker pen", quantity:14, price:1000}
],"pending")


console.log(customer);
customer.processPayment()
    .then(() => {
        console.log("Status:", customer.status); 
});



//QUESTION 2

class TeamMember {
    constructor(name, role, tasks) {
        this.name = name;
        this.role = role;
        this.tasks = tasks;
    }

    completeTask(taskTitle) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === taskTitle) {
                this.tasks[i].completed = true;
                break;
            }
        }
    }

    checkProgress() {
        return new Promise((resolve, reject) => {
            let pendingTasks = false;
            for (let i = 0; i < this.tasks.length; i++) {
                if (!this.tasks[i].completed) {
                    pendingTasks = true;
                    break;
                }
            }
            if (pendingTasks) {
                reject("Pending tasks remaining");
            } else {
                resolve("All tasks completed!");
            }
        });
    }
}

const teamMember1 = new TeamMember("Kevine", "musician", [
    { title: "sleep", completed: false },
    { title: "rehearsal", completed: true },
    { title: "connect", completed: false }
]);

teamMember1.completeTask("sleep");

teamMember1.checkProgress()
    .then(message => console.log(message))
    .catch(error => console.log(error));

const teamMember2 = new TeamMember("Umutoni", "Designer", [
    { title: "Design wire frames", completed: true },
    { title: "Create Mockups", completed: true }
]);

teamMember2.checkProgress()
    .then(message => console.log(message))
    .catch(error => console.log(error));

//QUESTION 3

    class Candidate {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.interviews = [];
    }

    scheduleInterview(date) {
        this.interviews.push({ date: date, status: "pending" });
    }
}

async function sendConfirmation(candidate) {
    return new Promise(resolve => {
        setTimeout(() => {
            const message = `Interview confirmed with ${candidate.name}`;
            console.log(message);
            resolve(message);
        }, 1000);
    });
}


const smartCandidate = new Candidate("Kevine Umutoni", "Software Engineer");
smartCandidate.scheduleInterview(new Date("2025-08-01"));

sendConfirmation(smartCandidate);

//QUESTION 4
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.students = [];
    }
     addStudent(name) {
        this.students.push({ name: name, progress: 0 });
    }


    updateProgress(studentName, value) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === studentName) {
                this.students[i].progress = value;
                return;
            }
        }
        console.log(`Student ${studentName} not found.`);
    }

    generateCertificate(studentName) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].name === studentName) {
                    if (this.students[i].progress === 100) {
                        resolve(`${studentName} successfully completed ${this.title}!`);
                    } else {
                        reject("Incomplete progress");
                    }
                    return;
                }
            }
            reject(`Student ${studentName} not found.`);
        });
    }
}

const course = new Course("Async functions", "Kevine Umutoni");

course.addStudent("Kevine");
course.addStudent("Umutoni");


course.updateProgress("Kevine", 50);
course.updateProgress("Umutoni", 100);

course.generateCertificate("Kevine")
    .then(message => console.log(message))
    .catch(error => console.log(error)); 

course.generateCertificate("Umutoni")
    .then(message => console.log(message))
    .catch(error => console.log(error));

course.generateCertificate("Keza Queen ")
    .then(message => console.log(message))
    .catch(error => console.log(error)); 


//QUESTION 5

class StockTracker {
    constructor() {
        this.watchlist = [];
    }

    updatePrice(symbol, newPrice) {
      for (let i = 0; i < this.watchlist.length; i++) {
          if (this.watchlist[i].symbol === symbol) {
              this.watchlist[i].currentPrice = newPrice;
              return;
          }
      }
    }

    async checkAlerts() {
        return new Promise((resolve, reject) => {
            const triggeredAlerts = [];
            for (let i = 0; i < this.watchlist.length; i++) {
                if (this.watchlist[i].currentPrice >= this.watchlist[i].threshold) {
                    triggeredAlerts.push(this.watchlist[i]);
                }
            }

            if (triggeredAlerts.length > 0) {
                resolve(triggeredAlerts);
            } else {
                reject("No alerts triggered");
            }
        });
    }
}

const tracker = new StockTracker();
tracker.watchlist.push({ symbol: "ABC", threshold: 50, currentPrice: 45 });
tracker.watchlist.push({ symbol: "XYZ", threshold: 100, currentPrice: 105 });

tracker.updatePrice("ABC", 55);

tracker.checkAlerts().then(alerts => {
    console.log("Alerts:", alerts); 
}).catch(message => {
    console.log(message);
});

tracker.updatePrice("ABC", 40);

tracker.checkAlerts().then(alerts => {
  console.log("Alerts:", alerts);
}).catch(message => {
  console.log(message);
});