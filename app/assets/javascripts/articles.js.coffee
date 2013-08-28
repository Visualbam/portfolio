#responsive navigation
$ ->
  pull = $("#pull")
  menu = $("nav ul")
  menuHeight = menu.height()
  $(pull).on "click", (e) ->
    e.preventDefault()
    menu.slideToggle()



# colorBar for beneath header
$ ->

  $bars = $(".colorBar")
  colors = ["#444444", "#35baff", "#a4e3ff", "#e9f9ff"]
  
  #shuffle will shuffle thebars  
  shuffleColors = true
  if shuffleColors
    colors = colors.sort((a, b) ->
      0.5 - Math.random()
    )
  $bars.css
    width: "100%"
    height: "1em"
    overflow: "hidden"
    background: colors[colors.length - 1]
    opacity: 0

  c = 0

  while c < colors.length
    $("<span>").css(
      display: "inline-block"
      width: 100 / colors.length + "%"
      height: "100%"
      background: colors[c]
    ).appendTo $bars
    c++

#ckeditor
$(document).ready ->
  $("form[data-remote]").bind "ajax:before", ->
    for instance of CKEDITOR.instances
      CKEDITOR.instances[instance].updateElement()


