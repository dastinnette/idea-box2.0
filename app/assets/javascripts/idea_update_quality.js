var increaseQuality = {
  swill: 'plausible',
  plausible: 'genius',
  genius: 'genius'
}

var decreaseQuality = {
  swill: 'swill',
  plausible: 'swill',
  genius: 'plausible'
}

function likeIdea(){
  $('#ideas').delegate('.like-idea', 'click', function(){
    var $idea   = $(this).closest('.idea')
    var quality = $idea.find('.idea-quality')
    var qualityText = quality.text()
    var data = { quality: increaseQuality[qualityText] }

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + $idea.attr('data-id'),
      data: data,
      success: function(){
        quality.text(increaseQuality[qualityText])
      }
    })
  })
}

function dislikeIdea(){
  $('#ideas').delegate('.dislike-idea', 'click', function(){
    var $idea   = $(this).closest('.idea')
    var quality = $idea.find('.idea-quality')
    var qualityText = quality.text()
    var data = { quality: decreaseQuality[qualityText] }

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + $idea.attr('data-id'),
      data: data,
      success: function(){
        quality.text(decreaseQuality[qualityText])
      }
    })
  })
}
