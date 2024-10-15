function getGeolocation() {
    const x = document.getElementById("geolocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        x.innerHTML = "浏览器不支持地理位置。";
    }
}

function showGeolocation(position) {
    const x = document.getElementById("geolocation");
    x.innerHTML = "纬度: " + position.coords.latitude +
        "<br>经度: " + position.coords.longitude;
}
