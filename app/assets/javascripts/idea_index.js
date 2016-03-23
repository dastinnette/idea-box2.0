function renderIdea(idea){
  $('#ideas').prepend(
    "<div class='idea' data-id='" + idea.id +"'><h2>"
    + idea.title
    + "</h2><p>"
    + idea.body
    + "<br>"
    + idea.quality
    + "</p>"
    + "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>"
    + "</div>"
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
