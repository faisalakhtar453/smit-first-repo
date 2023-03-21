// login btn
const login = ()=>{
  event.preventDefault()
  var userName = document.getElementById("name").value
  let mail = document.getElementById("email").value
  let pass = document.getElementById("password").value
    if (userName.length >= 3 && mail == "admin@user.com" && pass == "123456") {
    window.location.href = "home.html"
  }
  else {
    Toastify({
      text: "You enterd wrong password and email",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }   
    localStorage.setItem('username', userName);
  }
  let username = localStorage.getItem('username');

  document.getElementById("name").innerHTML = username

let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]
// print cities
function printCities() {
    let text = "";
    for (let i = 0; i < cities.length; i++) {
        num = i+1
        text += num + "-  " + cities[i] + "<br>";
    }
    
    document.getElementById("output").innerHTML = text;
    Toastify({
      text: "Your cities are here",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
}
// add city button
function addCity() {
  let val = document.getElementById("inputField").value
  if (val.length>3) {
    
    cities.push(val)
    let text = "";
    for (let i = 0; i < cities.length; i++) {
      num = i+1
      text += num + "-  " + cities[i] + "<br>";
    }
    document.getElementById("output").innerHTML = text;
    Toastify({
      text: "You added the city",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
   }
   else {
    Toastify({
      text: "Write city Name",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
   }
    
}
// check city name
function checkCity() {
  let checkCity = cities.map(city => city.toLowerCase());
  let val = document.getElementById("inputField").value.toLowerCase();
  if (checkCity.includes(val)) {
    document.getElementById("output").innerHTML = '<span style="font-size: 26px; color: green;">"' + val + '"</span> is in your list ❤️ !'
    Toastify({
      text: "Your added city is here",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
}


console.log(cities);


const clearData= ()=>{
  document.getElementById("inputField").value = ""
  document.getElementById("output").innerHTML = ""
}
