function updateIdeaTitle(){
  $('#ideas').delegate('.idea-title', 'keydown', function(event){
    var dispatchAjax = event.which === 13
    if (dispatchAjax) {
      event.preventDefault()
      var $idea = $(this).closest('.idea')
      var newTitle = { title: this.textContent }

      this.blur()

      $.ajax({
        type: "PUT",
        url: 'api/v1/ideas/' + $idea.attr('data-id'),
        data: newTitle
      })
    }
  })
}

function updateIdeaBody(){
  $('#ideas').delegate('.idea-body', 'keydown', function(event){
    var dispatchAjax = event.which === 13
    if (dispatchAjax) {
      event.preventDefault()
      var $idea = $(this).closest('.idea')
      var newBody = { body: this.textContent }

      this.blur()

      $.ajax({
        type: "PUT",
        url: 'api/v1/ideas/' + $idea.attr('data-id'),
        data: newBody
      })
    }
  })
}
