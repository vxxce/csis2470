/**
 * Sorts an array of people objects ({name, lname, relation})
 * @param {Array<Object>} people
 * @returns sorted array
 */
const peopleSort = people => {

  /**
   * Comparator for sorting by last name and then first name.
   * E.g. Stacey Attison
   *      Adam   Brown
   *      Alan   Brown
   *      Zach   Olpin
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
  // Todo: this is just filtering by first name atm--will have to abstract 
  return people.filter(p => p.name.startsWith(subString))
}

const loadJson = async () => {
  const res = await fetch("js/FriendsAndFamily.json")
  let {people} = await res.json()
  return people
}

// Makes <ul> with each <li> containing three spans. One for last name, first name, and relation.
// Appends to document body.
const makeList = people => {
  const list = document.createElement("ul")
  for (let p of people) {
    let li = document.createElement('li')
    li.classList.add('person')
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
  document.body.appendChild(list)
}

// Load Json, filter rows, sort rows, make DOM updates.
const results = async () => {
  let people = await loadJson()
  // Todo: Dom and design architecture not ready for filtering, this filters no one for now.
  let filtered = await peopleFilter(people, "")
  let sorted = peopleSort(filtered)
  makeList(sorted)
}

results()




