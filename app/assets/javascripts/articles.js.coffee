$(document).ready ->
  $("body").addClass "js"
  $menu = $("#menu")
  $menulink = $(".menu-link")
  $menulink.click ->
    $menulink.toggleClass "active"
    $menu.toggleClass "active"
    false

