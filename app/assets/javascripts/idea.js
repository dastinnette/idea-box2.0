$(document).ready(function() {
  function renderIdea(idea){
    $('#ideas').append(
      "<div class='idea' data-id='" + idea.id +"'><h2>"
      + idea.title
      + "</h2><p>"
      + idea.body
      + "</p>"
      + "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>"
      + "</div>"
    )
  }

  $.ajax({
    type: "GET",
    url : '/api/v1/ideas.json',
    success : function(ideas) {
      $.each(ideas, function(index, idea){
        renderIdea(idea)
      })
    }
  })
})
