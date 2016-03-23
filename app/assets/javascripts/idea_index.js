function renderIdea(idea){
  $('#ideas').prepend(
    "<div class='idea' data-id='" + idea.id +"'><h5>"
    + idea.title
    + "</h5><p>"
    + idea.body
    + "<br>This idea is: "
    + idea.quality
    + "</p>"
    + "<button id='delete-idea' class='btn btn-default btn-xs'>Delete</button>"
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
