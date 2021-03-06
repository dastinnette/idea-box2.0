function renderIdea(idea){
  $('#ideas').prepend(
    "<div class='idea' data-id='" + idea.id +"'><h5 class='idea-title' contentEditable = 'true'>"
    + idea.title
    + "</h5><p class='idea-body' contentEditable = 'true'>"
    + truncate(idea.body)
    + "</p>"
    + "<p>This idea is: </p>"
    + "<p class='idea-quality'>"
    + idea.quality
    + "</p>"
    + "<button class='like-idea btn orange accent-4'><icon class='material-icons left'>thumb_up</icon></button>"
    + "<div class='divider'/>"
    + "<button class='dislike-idea btn orange accent-4'><icon class='material-icons left'>thumb_down</icon></button>"
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
