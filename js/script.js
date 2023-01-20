const tabs = document.querySelectorAll(".tab");
const menus = document.querySelectorAll(".menu div");

// Add click event to tabs
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        // Remove active class from all tabs
        tabs.forEach(tab => tab.classList.remove("active"));
        // Add active class to current tab
        this.classList.add("active");
        // Hide all menus
        menus.forEach(menu => menu.style.display = "none");
        // Show the corresponding menu
        const id = this.getAttribute("id").split("tab")[1];
        const menu = document.querySelector(`#menu${id} div`);
        menu.style.display = "block";
    });
});

// Add click event to menu items
menus.forEach(menu => {
    menu.addEventListener("click", function() {
        // Remove active class from all menu items
        menus.forEach(menu => menu.classList.remove("active"));
        // Add active class to current menu item
        this.classList.add("active");
    });
});
