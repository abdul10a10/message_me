//= link_tree ../images
//= link_directory ../stylesheets .css
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on('turbolinks:load',function(){
    $('.ui.dropdown').dropdown();
    })