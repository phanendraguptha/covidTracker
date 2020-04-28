window.onload = load;
function load(){
  fetch("https://api.covid19api.com/summary")
    .then(res => res.json())
    .then(data => {
      var populationC = document.getElementsByClassName("populationC")[0];
      populationC.innerHTML = data.Global.TotalConfirmed;

      var populationD = document.getElementsByClassName("populationD")[0];
      populationD.innerHTML = data.Global.TotalDeaths;

      var populationR = document.getElementsByClassName("populationR")[0];
      populationR.innerHTML = data.Global.TotalRecovered;

      showDate(data.Countries[0].Date);
    })
}

window.onkeyup = keyup;
function keyup(e) {
  if (e.keyCode == 13) {
    fetchData();
  }
}

var search = document.getElementsByClassName("search")[0];
search.addEventListener("click", function(){
  var input = document.getElementsByClassName("input")[0].value;
  if(input!="")
    fetchData();
})

function fetchData(){
  var input = document.getElementsByClassName("input")[0].value;
    fetch("https://covid19.mathdro.id/api/countries/"+input)
    .then(res => res.json())
    .then(data => {
      var populationC = document.getElementsByClassName("populationC")[0];
      populationC.innerHTML = data.confirmed.value;

      var populationD = document.getElementsByClassName("populationD")[0];
      populationD.innerHTML = data.deaths.value;

      var populationR = document.getElementsByClassName("populationR")[0];
      populationR.innerHTML = data.recovered.value;

      showDate(data.lastUpdate);
    })
}

function showDate(date){
  var current_datetime = new Date(date);
  current_datetime = current_datetime.toDateString()

  var date = document.getElementsByClassName("date")[0];
  date.innerHTML = current_datetime;
  var date1 = document.getElementsByClassName("date")[1];
  date1.innerHTML = current_datetime;
  var date2 = document.getElementsByClassName("date")[2];
  date2.innerHTML = current_datetime;
}