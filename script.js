 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inv").classList.toggle("invert");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        console.log('click')
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }