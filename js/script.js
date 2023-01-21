function openSection(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("mouseout", function(event) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    for (var i = 0; i < tabcontent.length; i++) {
        if (event.relatedTarget == null || !tabcontent[i].contains(event.relatedTarget)) {
            tabcontent[i].style.display = "none";
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }
});

// Add event listeners to the tab buttons to open the tab on click or hover
var tablinks = document.getElementsByClassName("tablinks");
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("mouseover", function(event) {
        openSection(event, event.target.innerHTML);
    });
    tablinks[i].addEventListener("click", function(event) {
        openSection(event, event.target.innerHTML);
    });
}
