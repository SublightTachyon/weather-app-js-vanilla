 window.addEventListener('load',()=> {
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            apiKey = 'f54b695fd54a245c73014859276c3be8';
            const api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`;
            fetch(api)
            .then(response =>{
                return response.json
            })
            .then(data =>{
                console.log(data);
            })
        });
        

    }else{
        h1.textContent = "please enable location services"
    }

 })
