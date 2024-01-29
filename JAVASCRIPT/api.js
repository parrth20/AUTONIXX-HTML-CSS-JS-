console.log("hello jee parth");

try{
    async function showweather(){
        // let lat = 15.3333;
        // let longi = 74.0833;
        let city = "lucknow";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cf7252deb6cdb5dbef5eb58a60e34d7&units=metric`);
    
        const data = await response.json(); // response converted to json format
        console.log("weather data-> " , data);
    
        let newpara = document.createElement('p');
        newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        document.body.appendChild(newpara);
}
}

catch(error){
    //handle the error
    console.log("error in running API" , error);
}

async function fetchweatherdetails(){
try { 
        let latitude = 13.3334;
        let longitude = -9893.378;
    
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9cf7252deb6cdb5dbef5eb58a60e34d7`);
        const data = await result.json();
    
        console.log(data);
    
    }

catch(err){
    console.log("lati or longi is not correct" , err);
    }
}
