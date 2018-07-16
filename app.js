(function() {
    'use strict';
  
    var app = {
      isLoading: true,
      visibleCards: {},
      spinner: document.querySelector('.loader'),
      cardTemplate: document.querySelector('.cardTemplate'),
      container: document.querySelector('.main'),
      form: document.querySelector('.form')
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('/service-worker.js')
                 .then(function() { console.log('Service Worker Registered'); });
    }
} )();

var form = document.getElementById('myForm');

form.addEventListener('submit',function validate () {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      alert("Please enter a valid email id")
    }
    else {
        document.forms["myForm"].action = "/dashboard.html";
    }
});

document.getElementById('signuplink').addEventListener('click', function () {
    location.href="./register.html";
  });

document.getElementById('forgotlink').addEventListener('click', function () {
    location.href="./forgot_pwd.html";
});
