
function plotstackedhistogram() {
  Highcharts.chart('container6', {
      chart: {
          type: 'histogram'
      },
      title: {
          text: 'Streaming Providers: Packet Size Frequency'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          title: {
              text: 'Packet Sizes'
              },
  
          categories: [0, 200, 400, 600, 800, 
            1000, 1200, 1400, 1600],
          crosshair: true
      },
      yAxis: {
          min: 0,
          max:1,
          title: {
          text: 'Normalized Frequency'
          }
      },
      tooltip: {
          
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
        series: {
          dataLabels: {
              enabled: true
              
      

          }
      },
          column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false
          }
      },
      series: [{
          name: 'Amazon Prime',
          data: [0.1357, 0.1010,0.0076, 0.0054, 0.0048, 0.0047,0.7373,0.0032],
          color: 'blue'
      
      }, {
        name: 'Youtube Live',
        data: [0.1834,0.0042,0.0071,
          0.0034,0.0027,0.0095,0.0012, 0.7885],
        color: 'red'
    
    }, 
    {
      name: 'Twitch',
      data: [0.207311,0.006966,
          0.0055,0.0023,0.0034, 0.0061,0.0046,0.7637],
      color: 'purple'
  
  },
  {
    name: 'Netflix',
    data: [0.2517, 0.0306, 0.0213,0.0054,0.0048,0.0046, 0.6799,0.0016],
    color: 'darkred'

  },
  {
    name: 'Youtube',
    data: [ 0.4470, 0.0019,0.0012,0.0010, 0.0003,0.0002, 0.5483,0.0000],
    color: 'rgb(225,15,0)'

  }]
      })};

function plotcolumn() {  Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Streaming Providers: Packet Size Frequency'
    },

    subtitle: {
        text: 'Hover over the providers for more information!'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: [0, 200, 400, 600, 800, 
			  1000, 1200, 1400, 1600],
        labels: {
            x: -10
        },title: {
              text: 'Packet Sizes'
              },
  
    },

    yAxis: {
        allowDecimals: true,
        title: {
            text: 'Normalized Frequency'
        }
    },

    series: [{
        name: 'Amazon Prime',
			data: [0.1357, 0.1010,0.0076, 0.0054, 0.0048, 0.0047,0.7373,0.0032],
			color: 'blue'
    }, {
        name: 'Youtube Live',
		  data: [0.1834,0.0042,0.0071,
			0.0034,0.0027,0.0095,0.0012, 0.7885],
		  color: 'red'
    }, {
       name: 'Twitch',
		data: [0.207311,0.006966,
			0.0055,0.0023,0.0034, 0.0061,0.0046,0.7637],
		color: 'purple'
    },{
	  name: 'Netflix',
	  data: [0.2517, 0.0306, 0.0213,0.0054,0.0048,0.0046, 0.6799,0.0016],
	  color: 'darkred'
  
	},
	{
	  name: 'Youtube',
	  data: [ 0.4470, 0.0019,0.0012,0.0010, 0.0003,0.0002, 0.5483,0.0000],
	  color: 'rgb(225,15,0)'
  
	}
    ]})};

function init() { 

    console.log("inside")
    plotcolumn();
    //plotstackedhistogram();


}


document.addEventListener('DOMContentLoaded', init, false);
