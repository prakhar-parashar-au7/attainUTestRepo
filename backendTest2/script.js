
function country(inputName) {
  
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputName},uk&appid=daa05177164b692c674b635c1363ffb6`
    )
      .then((data1) => data1.json())
      .then(function (data2) {
        console.log("Fetch Data=================>",data2)
        for (const property in data2.main) {
          console.log(property, ":", data2.main[property]);
          if (property == "temp_min") {
            mintemp.css({"color": "#2a5934"}).text(data2.main[property])
          }
          if (property == "temp_max") {
            maxtemp.css({"color": "#2a5934"}).text(data2.main[property]);
          }
          if (property == "pressure") {
            pressure.css({"color": "#2a5934"}).text(data2.main[property]);
          }
          if (property == "humidity") {
            humidity.css({"color": "#2a5934"}).text(data2.main[property]);
          }
        }
      })
  
      .catch(function (err) {
        console.log(err);
      });
  }
  