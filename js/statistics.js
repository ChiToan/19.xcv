Chart.defaults.global.defaultFontFamily = "'Trirong', serif"
Chart.defaults.global.defaultFontColor = "#daa520"

var ctx = document.getElementById('gender').getContext('2d');
// ctx.canvas.width = window.innerWidth;
var gender = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Female', 'Male'],
    datasets: [{
      label: 'Age Range',
      backgroundColor: [
        '#ebcd81',
        '#daa520'
      ],
      data: [71, 29]
    }]
  },
  options: {
    legend: {
      reverse: true,
      position: 'bottom',
      labels: {
        padding: 24,
        fontSize: 20
      }
    }
  }
});

var ctx = document.getElementById('age').getContext('2d');
var age = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [{
      label: 'Age Range',
      backgroundColor: [
        '#ebcd81',
        '#daa520',
        '#daa520',
        '#ebcd81',
        '#ebcd81',
        '#ebcd81'
      ],
      data: [8, 41, 34, 10, 3, 1, 0]
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        },
        scaleLabel: {
          labelString: 'test'
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
});