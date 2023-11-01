let menu = document.getElementById("menu");
let check = document.getElementById("check");
let ham2 = document.getElementById("ham2");
let nav_menu = document.getElementById("nav-menu");

window.onbeforeunload = function() {
  check.checked = false;
  if (check.checked) {
    menu.style.rotate = "180deg";
    nav_menu.classList = "nav-menu";
  } else {
    menu.style.rotate = "0deg";
    nav_menu.classList = "";
  }
};

check.addEventListener("click", function(){
    if (check.checked) {
      menu.style.rotate = "180deg";
      nav_menu.classList = "nav-menu";
    } else {
      menu.style.rotate = "0deg";
      nav_menu.classList = "";
    }
});

function c_ham() {
  if (check.checked) {
    check.checked = false;
    menu.style.rotate = "0deg";
    nav_menu.classList = "";
  } else {
  }
}



document.getElementById("Form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var formData = new FormData(this); 
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");

  fetch("https://sheetdb.io/api/v1/98wt7ceyr1yma", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    })
    .catch(error => {
      console.error(error);
    });
});


function wa() {
  var nomorTujuan = "+6285855185068"; // Ganti dengan nomor penerima yang sesuai
  var pesan = ""; // Ganti dengan pesan yang ingin Anda kirim

  var url = "https://api.whatsapp.com/send?phone=" + nomorTujuan + "&text=" + encodeURIComponent(pesan);
  window.location.href = url;
}