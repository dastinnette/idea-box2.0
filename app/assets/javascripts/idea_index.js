function renderIdea(idea){
  $('#ideas').prepend(
    "<div class='idea' data-id='" + idea.id +"'><h5>"
    + idea.title
    + "</h5><p>"
    + idea.body
    + "<br>This idea is: "
    + idea.quality
    + "</p>"
    + "<button id='like-idea' class='btn orange accent-4'><icon class='material-icons left'>thumb_up</icon></button>"
    + "<div class='divider'/>"
    + "<button id='dislike-idea' class='btn orange accent-4'><icon class='material-icons left'>thumb_down</icon></button>"
    + "<div class='divider'/>"
    + "<button class='delete-idea btn orange accent-4'><icon class='material-icons left'>delete_forever</icon></button>"
    + "</div><br>"
  )
}

function fetchIdeas(){
  $.ajax({
    type: "GET",
    url: '/api/v1/ideas.json',
    success: function(ideas) {
      $.each(ideas, function(index, idea){
        renderIdea(idea)
      })
    }
  })
}
