// When DOM loaded, execute parameterized callback
$(document).ready(function() {
  let html = ""
  // Load hobbies.json data asynchronously
  $.getJSON('./js/hobbies.json', function(json) {
    // Loop over data
    $.each(json, function(k, hobbies) {
      // Create a new div from each hobby object in hobbies array and append to html string
      $.each(hobbies, function(k, hobby) {
        html += "<div>"
        html += `<h2>${hobby.name}</h2>`
        html += `<img src="./img/${hobby.src}" />`
        html += `<p>${hobby.description}</p>`
        html += "</div>"
      })
    })
    // Make slideshow by cycling through each top-level element in html string (the hobby divs)
    $('#hobbies').html(html).cycle({
      fx: "scrollHorz", // Transition effect
      prev: "#prev", // Selector to cycle to previous
      next: "#next", // Select to cycle to next
      sync: true, // Transition slides in sync
      pause: true, // Pause playback on hover
      timeout: 8000, // 8 second default for each slide
    })
  })
})