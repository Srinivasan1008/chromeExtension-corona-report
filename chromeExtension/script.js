async function fetchCountries() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d9ace7325msh9c5804cc6c4276dp151dc6jsne79bc3b2fabb',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const response = await fetch('https://covid-193.p.rapidapi.com/countries', options)
    const record = await response.json()

    var x = document.getElementById('countries');
    record.response.forEach(element => {
        var option = document.createElement("option");
        option.text = element;
        x.add(option);
    });
}

fetchCountries();

document.getElementById("countries").addEventListener("change", fetchCoronaData);

async function fetchCoronaData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d9ace7325msh9c5804cc6c4276dp151dc6jsne79bc3b2fabb',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
   const response = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${this.value}`, options)
   const record = await response.json()
  if(record.response && record.response.length > 0 && this.value != "Select a Country"){
   document.getElementById("population").innerText = `Population : ${record.response[0].population}`;
   document.getElementById("cases").innerText = `Cases : ${record.response[0].cases.total}`;
   document.getElementById("deaths").innerText = `Deaths : ${record.response[0].deaths.total}`;
   document.getElementById("tests").innerText = `Tests : ${record.response[0].tests.total}`;
  }
}