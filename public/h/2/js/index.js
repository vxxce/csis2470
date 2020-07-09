/**
 * Sorts an array of people objects ({name, lname, relation})
 * @param {Array<Object>} people
 * @returns sorted array
 */
const peopleSort = people => {

  /**
   * Comparator for sorting by last name and then first name.
   */
  const comparator = (a,b) => {
    if (a.lname.toLowerCase() < b.lname.toLowerCase()) return -1
    else if (a.lname.toLowerCase() > b.lname.toLowerCase()) return 1
    else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    else return 0
  }

  let _people = [...people]
  _people.sort(comparator)
  return _people
}

/**
 * Filter array of people objects by checking for subString match at start of name.
 * @param {Array<Object>} people 
 * @param {string} subString 
 */
const peopleFilter = (people, subString) => {
  return people.filter(p => {
    return (
      p.name.toLowerCase().startsWith(subString)
        || p.lname.toLowerCase().startsWith(subString)
        || p.name.concat(" ").concat(p.lname).toLowerCase().startsWith(subString)
    )
  })
}

const loadJson = async () => {
  const res = await fetch("js/FriendsAndFamily.json")
  let {people} = await res.json()
  return people
}

// Makes <ul> with each <li> containing three spans. One for last name, first name, and relation.
// Appends to document body.
const makeList = people => {
  let list = document.querySelector('ul')
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild)
  }
  for (let p of people) {
    let li = document.createElement('li')
    li.classList.add('person')
    li.id = p.name.toLowerCase().concat(p.lname.toLowerCase())
    let name = document.createElement('span')
    let lname = document.createElement('span')
    let relation = document.createElement('span')
    name.textContent = p.name
    lname.textContent = p.lname
    relation.textContent = p.relation
    li.appendChild(lname)
    li.appendChild(name)
    li.appendChild(relation)
    list.appendChild(li)
  }
  document.querySelector('main').appendChild(list)
}

// Add option elements for all names
const populateSelects = people => {
  let fname = document.querySelector('.fname')
  let lname = document.querySelector('.lname')
  for (let p of people) {
    let fOption = document.createElement('option')
    let lOption = document.createElement('option')
    fOption.value = p.name
    fOption.textContent = p.name
    lOption.value = p.lname
    lOption.textContent = p.lname
    fname.appendChild(fOption)
    lname.appendChild(lOption)
  }
}

// Load Json, filter rows, sort rows, make DOM updates.
const results = async (filter="") => {
  let people = await loadJson()
  let filtered = await peopleFilter(people, filter)
  let sorted = peopleSort(filtered)
  if (document.querySelector('.fname').childElementCount <= 1) {
    populateSelects(sorted)
  }
  makeList(sorted)
}

document.body.addEventListener("load", () => results(), true)

//TODO: Debounce this
document.querySelector('.name').addEventListener('input', e => results(e.target.value.toLowerCase()), true)

