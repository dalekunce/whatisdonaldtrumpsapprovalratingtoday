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

//d3 stuff
var svg = d3.select("#speedometer")
.append("svg:svg")
.attr("width", 600)
.attr("height", 600);


var gauge = iopctrl.arcslider()
.radius(120)
.events(false)
.indicator(iopctrl.defaultGaugeIndicator);
gauge.axis().orient("in")
.normalize(true)
.ticks(4)
.tickSubdivide(3)
.tickSize(10, 8, 10)
.tickPadding(5)
.scale(d3.scale.linear()
.domain([0, 100])
.range([-3*Math.PI/4, 3*Math.PI/4]));

var segDisplay = iopctrl.segdisplay()
.width(80)
.digitCount(6)
.negative(false)
.decimals(0);

svg.append("g")
.attr("class", "segdisplay")
.attr("transform", "translate(130, 200)")
.call(segDisplay);

svg.append("g")
.attr("class", "gauge")
.call(gauge);

gettrumped();
