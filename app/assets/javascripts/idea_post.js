function newIdea(){
  $('#create-id').click(function(){
    var ideaPost = { title: $('.title').val(),
                     body: $('.body').val()
                   }
    $.ajax({
      type: "POST",
      url: '/api/v1/ideas.json',
      data: ideaPost,
      success: function(response){
        renderIdea(response),
        clearInputFields()
      }
    })
  })
}

function clearInputFields(){
  $('#title').val("")
  $('#body').val("")
}
