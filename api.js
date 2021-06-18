
const api_url = "https://api.covid19api.com/country/turkey?from=2021-03-01T00:00:00Z&to=2021-06-01T00:00:00Z";


$(document).ready(function() {   
 
    $.ajax({
        url: api_url,
        success: function(data) {
            myfunction(data);
        },
    });
    function myfunction(mydata){
        $('#CoronaTable').DataTable( {
            data : mydata,
            columns: [ 
                { "data" : 'ID' }, 
                { "data" : 'Country' },
                { "data" : 'CountryCode' }, 
                { "data" : 'Province' },
                { "data" : 'City' },
                { "data" : 'CityCode' },
                { "data" : 'Lat' },
                { "data" : 'Lon' },
                { "data" : 'Confirmed' }, 
                { "data" : 'Deaths' },
                { "data" : 'Recovered' }, 
                { "data" : 'Active' },
                { "data" : 'Date'} 
            ]
        });
    }
} );



