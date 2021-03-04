
function plot_feature_importances() { Highcharts.chart('features', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
    }]
})};

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
function removeside(){
	var sidebar= document.getElementById("sidebar")
	sidebar.remove()
	
}

function treeexample(){
	Highcharts.chart('tree', {

  chart: {
    height: 400,
    inverted: true
  },

  title: {
    useHTML: true,
    text: 'Example Decision Tree'
  },

  series: [{
    type: 'organization',
    name: 'United Nations',
    keys: ['from', 'to'],
    data: [
      
      ['Director', 'ESU'],
      ['Director', 'CDS'],
      
      ['ESU', 'ESB'],
      ['ESU', 'DSSB'],
      ['CDS', 'EESB'],
      ['CDS', 'TSB'],
      ['CDS', 'SSB'],
      
      
      
      
    ],
    levels: [{
      level: 0,
      color: 'silver',
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 1,
      color: 'silver',
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 2,
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 4,
      dataLabels: {
        color: 'black'
      },
      height: 20
    }],
    nodes: [{
      id: 'Director',
      title: null,
      name: 'Data',
      color: "#c9daf8ff",
           info: "Raw Data processed to enter the classification tree"

    }, {
      className: 'title',
      id: 'ESU',
      title: null,
      name: 'Engineered Feature',
      layout: 'hanging',
      color: "#6d9eebff",
      info: "The variety of different engineered features help classify each file into a certain class"
    }, {
      id: 'CDS',
      title: null,
      name: 'Engineered Feature',
      image: null,
     // layout: 'hanging',
      color: "#6d9eebff",
      info: "The variety of different engineered features help classify each file into a certain class"
    }, {
      id: 'ESB',
      title: null,
      name: 'Youtube',
      column: 2,
      layout: 'hanging',
      color: "#e10f00",
      info: "Classified Data"
    },  {
      id: 'DSSB',
      name: 'Twitch',
      column: 2,
      layout: 'hanging',
      color: "#b16eff",
      info: "Classified Data"
    }, {
      id: 'EESB',
      name: 'Netflix',
      column: 2,
      layout: 'hanging',
      color: "#ba020e",
      info: "Classified Data"
    },  {
      id: 'TSB',
      name: 'Youtube Live',
      column: 2,
      layout: 'hanging',
      color: "red",
      info: "Classified Data"
    },  {
      id: 'SSB',
      name: 'Amazon',
      column: 2,
      layout: 'hanging',
      color: "#00ade1",
      info: "Classified Data"
    }],
    colorByPoint: false,
    color: '#007ad0',
    dataLabels: {
      color: 'white',
    },
    borderColor: 'white',
    nodeWidth: 65,
    nodePadding: 0
  }],

  tooltip: {
    outside: true,
    formatter: function() {
      //debugger;
      return this.point.info;
    }
  }

});

}

function uploadappear() {
    var checkBox = document.getElementById("C1");
    var text = document.getElementById("text1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function downloadappear() {
    var checkBox = document.getElementById("C2");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}



function init() { 

    console.log("inside")
    removeside();
    treeexample();
    plotcolumn();
	plot_feature_importances();
	
	uploadappear();
	downloadappear();
    //plotstackedhistogram();


}


document.addEventListener('DOMContentLoaded', init, false);
