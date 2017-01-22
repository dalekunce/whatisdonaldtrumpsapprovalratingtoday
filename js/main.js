var approve;

function gettrumped () {
  $.getJSON( "http://elections.huffingtonpost.com/pollster/api/v2/charts/donald-trump-favorable-rating", function(data) {
    approve = data.pollster_estimates[0].values.hash.Favorable
    if (approve <= 30) {
      $('#trumped-number').css('color', 'red')
    } else if (approve <= 50) {
      $('#trumped-number').css('color', 'orange')
    } else if (approve > 50) {
      $('#trumped-number').css('color', 'green')
    }

    $('#trumped-number').html(approve);
  });
}

gettrumped();
