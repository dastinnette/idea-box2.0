function postIdea(){
  $('#create-id').click(function(){
    var ideaPost = { title: $('#title').val(),
                     body: $('#body').val()
                   }
    $.ajax({
      type: "POST",
      url: '/api/v1/ideas.json',
      data: ideaPost,
      success: function(ideas) {
        renderIdea(ideas)
        clearInputField()
      }
    })

  })

function clearInputField(){
  $('#title').val("")
  $('#body').val("")
}
// we also need to clear the input and out put fields

}
