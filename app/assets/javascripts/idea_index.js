function renderIdea(idea){
  $('#ideas').prepend(
    "<div class='idea' data-id='" + idea.id +"'><h3>"
    + idea.title
    + "</h3><p>"
    + idea.body
    + "<br>"
    + idea.quality
    + "</p>"
    + "<button id='delete-idea' class='btn btn-default btn-xs'>Delete</button>"
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
