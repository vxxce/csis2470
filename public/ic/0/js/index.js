// Alerts
alert(`3 + 3 = ${3 + 3}`)
alert(`3 - 3 = ${3 - 3}`)
alert(`3 * 3 = ${3 * 3}`)
alert(`3 / 3 = ${3 / 3}`)

// Variables
const HALF_PI = Math.PI / 2
let num = 7
var ber = 9

// Alert with variables
alert(`Half of PI multiplied by 7 = ${HALF_PI * 7}`)

// Prompts
let fname = prompt("What is your first name?").trim().toLowerCase()
let lname = prompt("What is your last name?").trim().toLowerCase()
let bday = prompt("What is your birthday? (YYYY-MM-DD)")

/* 
  * This is a multi-line comment.
  * My name is Zachary Olpin.
  *
  */

// A person class
class Person {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName
    this.lastName = lastName
    try {
      this.birthday = new Date(birthday)
    } catch (e) {
      console.log(e)
    }
  }

  // Getter for name
  get name() {
    return this.firstName.concat(" ").concat(this.lastName)
  }

  // Getter for age
  get age() {
    return this.birthday instanceof Date
      ? new Date().getFullYear() - this.birthday.getFullYear()
      : null
  }

  // Checks if birthday month
  isBirthdayMonth = () => new Date().getMonth == this.birthday
}

// Instantiated Person object
let visitor = new Person(fname, lname, bday)

// An Array
let books = [["The Strange Order Of Things", "Antonio Damasio"]
  , ["Godel, Escher, Bach", "Douglas Hofstadter"]
  , ["Exhalations", "Ted Chiang"]
  , ["Chaos", "James Gleick"]
]

// Update DOM with welcome text
let welcome = document.querySelector(".visitor")
welcome.textContent = "Hello, ".concat(visitor.name).concat("!")
let welcomeSub = document.createElement("h4")

if (!visitor.age) {
  welcomeSub.textContent = "You entered your birthday incorrectly :("
} else if (visitor.isBirthdayMonth()) {
  welcomeSub.textContent = `It's your birthday month! You will soon be ${visitor.age + 1} years old.`
} else {
  welcomeSub.textContent = `It is not your birthday month. You are ${visitor.age}.`
}

welcome.appendChild(welcomeSub)

// Make list of books and add to DOM
let booklist = document.createElement("ol")
let booklistHeader = document.createElement("h4")
booklistHeader.textContent = "Bookshelf"
booklist.appendChild(booklistHeader)

for (let b of books) {
  let li = document.createElement("li")
  li.textContent = b.join(": by ")
  booklist.appendChild(li)
}

document.body.appendChild(booklist)