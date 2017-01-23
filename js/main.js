var approve;

function gettrumped () {
  $.getJSON( "http://elections.huffingtonpost.com/pollster/api/v2/charts/donald-trump-favorable-rating", function(data) {
    approve = data.pollster_estimates[0].values.hash.Favorable;
    if (approve <= 30) {
      $('#trumped-number').css('color', 'darkred')
    } else if (approve <= 40) {
      $('#trumped-number').css('color', 'red')
    } else if (approve <= 50) {
      $('#trumped-number').css('color', 'orange')
    } else if (approve > 50) {
      $('#trumped-number').css('color', 'green')
    }

    $('#trumped-number').append(approve.toFixed(1) + "%");

    segDisplay.value(approve);
    gauge.value(approve);

  });
}

gettrumped();
