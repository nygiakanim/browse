$(document).ready(function(){
$(".btn-slide").click(function(){
$("#panel").slideToggle("slow");
$(this).toggleClass("active");
});
});


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

function ouvrirPage()
    var a - documents.getElementById("search").value;
    if (a ---"Shingeki No Kyojin") {
      windows.open("shingekinokyojin.html")
    }

const btn = document.querySelector('.btn');
const window = document.getElementById('window');
var txt = ['Mode Sombre', 'Mode light'];
var bool = 1;
 
btn.addEventListener('onclick', function () {
    window.classList.toggle('dark');
 
    if (bool == 1) {
        btn.innerHTML = txt[1];
        bool = 0;
    } else {
        btn.innerHTML = txt[0];
        bool = 1;
    }
});


var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}