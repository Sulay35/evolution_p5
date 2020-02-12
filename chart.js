var ctx = document.getElementById('myChart').getContext('2d');


var options = {
    responsive:false, // do not resize
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                
            }
        }],
        /*
        xAxes: [{
            ticks: {
                beginAtZero: true,
                min:0,
                max:10,
            }
        }]*/
    }
}


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'red population',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        },
        // Green graph
        {
            label:"Green population",
            data:[],
            backgroundColor:[
                'rgba(99,255,132,0.2)'
            ],
            borderColor:[
                'rgba(99,255,132,1)'
            ],
            borderWidth:2
        },

        // Blue graph
        {
            label:"Blue population",
            data:[],
            backgroundColor:[
                'rgba(132,99,255,0.2)'
            ],
            borderColor:[
                'rgba(132,99,255,1)'
            ],
            borderWidth:2
        },

        // population graph
        {
            label:"Blobs total population",
            data:[],
            backgroundColor:[
                'rgba(257,254,27,0.2)'
            ],
            borderColor:[
                'rgba(255,254,27,1)'
            ],
            borderWidth:2
        },

    
    ]
    },
    options: {
        responsive:false, // do not resize
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    
                }
            }],
            /*
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    min:0,
                    max:10,
                }
            }]*/
        }
    }
});