
function showWeather(){
	var str = '<object type="text/html" data="http://www.265.com/weather.htm" name="I2"> </object>';
	document.getElementById("weather").innerHTML = str;
}

function showWeatherLoop() {
    showWeather();
    setInterval('showWeather()',1000*60*10);//10分钟刷新1次当前天气
}

addOnLoadEvent(showWeatherLoop);
