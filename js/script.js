$(function () {
  let form = $('form');
  let search = $('input[type="text"]')
  let button = $('input[type="submit"]');
  let header = $('#header')
  let spriteImg = $('#sprite')

  form.on('submit', getUserInput)

  function getUserInput (e) {
    e.preventDefault()
    let apiLink = `https://pokeapi.co/api/v2/pokemon/${search.val()}`

    if (!search.val()) {
      header.html('Please enter a pokemon to search for')
    }
    makeAPIRequest(apiLink)
  }

  function makeAPIRequest (apiLink) {
    $.getJSON(`${apiLink}`).done((response) => {
      processResponse(response)
    }).fail(() => {
      console.log('error')
      header.html('This pokemon is not available')
    })
  }

  function processResponse (response) {
    console.log(response.sprites)
    let name = response.name
    let sprite = response.sprites.front_shiny
    header.html(`${name}`)
    spriteImg.attr('src', `${sprite}`)
  }
})
