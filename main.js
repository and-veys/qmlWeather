var cities = {
    "Москва": [55.7522, 37.6156],
    "Пекин": [39.9075, 116.397],
    "Канберра": [-35.2835, 149.128]
};




function getCities() {
    return Object.keys(cities);
}


function setWeather(parent) {
    var coord = cities[parent.city];
    var xmlhttp  = new XMLHttpRequest();
    var url  = "https://api.weatherbit.io/v2.0/current?lat=" + coord[0]  + "&lon=" + coord[1] + "&key=" + parent.key
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
            var dt = JSON.parse(xmlhttp.responseText).data[0];
            var img = new Image(50, 50);
            img.src = "https://www.weatherbit.io/static/img/icons/" + dt.weather.icon + ".png";
            img.onload = function(){
                parent.canvas.width = this.naturalWidth;
                parent.canvas.height = this.naturalHeight;
                var ctx = parent.canvas.getContext("2d");
                ctx.drawImage(this, 0, 0);
            }
            parent.param = {
                 "city_name": "Город: " + dt.city_name,
                 "timezone": "Часовой пояс: " + dt.timezone,
                 "sunrise": "Время восхода солнца (по Гринвичу): " + dt.sunrise,
                 "sunset": "Время захода солнца (по Гринвичу): " + dt.sunset,
                 "ob_time": "Время замера (по Гринвичу): " + dt.ob_time,
                 "weather": "Погода: " + dt.weather.discription,
                 "temp": "Температура (градус Цельсия): " + dt.temp,
                 "app_temp": "Ощущается как (градус Цельсия): " + dt.app_temp,
                 "pres": "Давление (мм рт ст): " + dt.pres * 0.75,
                 "rh": "Относительная влажность (%): " + dt.rh,
                 "clouds": "Облачность (%): " + dt.clouds,
                 "wind_cdir_full": "Направление ветра: " + dt.wind_cdir_full,
                 "wind_spd": "Скорость ветра (м/с): " + dt.wind_spd
            }
        }
    }
    xmlhttp.send();
}

function getParam() {
    return {
         "city_name": "Ошибка загрузки ресурса",
         "timezone": "Ошибка загрузки ресурса",
         "sunrise": "Ошибка загрузки ресурса",
         "sunset": "Ошибка загрузки ресурса",
         "ob_time": "Ошибка загрузки ресурса",
         "weather": "Ошибка загрузки ресурса",
         "temp": "Ошибка загрузки ресурса",
         "app_temp": "Ошибка загрузки ресурса",
         "pres": "Ошибка загрузки ресурса",
         "rh": "Ошибка загрузки ресурса",
         "clouds": "Ошибка загрузки ресурса",
         "wind_cdir_full": "Ошибка загрузки ресурса",
         "wind_spd": "Ошибка загрузки ресурса"
    }
}







