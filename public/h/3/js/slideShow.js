// When DOM loaded, execute callback
$(document).ready(function() {
  // Load JSON data with Jquery shorthand ajax method
  $.getJSON('./js/hobbies.json', function(res) {
    // Reduce array of hobby objects to an html string of divs, each with a header, image, and caption.
    let html = res['hobbies'].reduce(function(acc, h) {
      return acc.concat(`<div><h2>${h.name}</h2><img src="./img/${h.src}" /><p>${h.description}</p></div>`)
    }, "")

    // Use Jquery `cycle` plugin to make slideshow from divs in the html string.
    $('#hobbies').html(html).cycle({
      fx: "scrollHorz", // Transition effect
      prev: "#prev", // Selector to cycle to previous
      next: "#next", // Select to cycle to next
      sync: true, // Transition slides in sync
      pause: true, // Pause playback on hover
      timeout: 6000, // 8 second default for each slide
    })
  })
})