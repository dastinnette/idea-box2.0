function searchIdeas(){
  $('.search-bar').keyup(function(){
    var $filterQuery = $('.search-bar').val()

    showFilteredIdeas($filterQuery)
  })
}

function showFilteredIdeas(filterQuery) {
  var $ideas = $('#ideas').find('.idea')

  $.each($ideas, function (index, idea){
    ideaTitle = $(idea).find('.idea-title').text()
    ideaBody = $(idea).find('.idea-body').text()

    if (ideaTitle.indexOf(filterQuery) >= 0 || ideaBody.indexOf(filterQuery) >= 0) {
      $(idea).show()
    } else {
      $(idea).hide()
    }
  })
}
