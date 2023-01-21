class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <style>

        body {
          font-family: "Montserrat", Calibri, Tahoma, sans-
        }
        
        /* Navbar container */
        .navbar {
            overflow: hidden;
            background-color: rgb(15, 48, 156);
            background-image: linear-gradient(to right,rgb(15, 48, 156), rgb(13, 159, 218));
            font-family: Arial;
          }
          
          /* Links inside the navbar */
          .navbar a {
            float: left;
            font-size: 16px;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          
          /* The dropdown container */
          .dropdown {
            float: left;
            overflow: hidden;
          }
          
          /* Dropdown button */
          .dropdown .dropbtn {
            font-size: 16px;
            border: none;
            outline: none;
            color: white;
            padding: 14px 16px;
            background-color: inherit;
            font-family: inherit; /* Important for vertical align on mobile phones */
            margin: 0; /* Important for vertical align on mobile phones */
          }
          
          /* Add a blue background color to navbar links on hover */
          .navbar a:hover, .dropdown:hover .dropbtn {
            background-color: rgb(13, 159, 218);
          }
          
          /* Dropdown content (hidden by default) */
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
          }
          
          /* Links inside the dropdown */
          .dropdown-content a {
            float: none;
            color: rgb(0, 0, 0);
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
          }
          
          /* Add a color to dropdown links on hover */
          .dropdown-content a:hover {
            background-color: rgb(13, 159, 218);
          }
          
          /* Show the dropdown menu on hover */
          .dropdown:hover .dropdown-content {
            display: block;
          }        
        </style>

        <header>
        <div class="navbar">
          <a href="index.html">Home</a>
          <div class="dropdown">
              <button class="dropbtn">Learning
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="english.html">English</a>
                  <a href="japanese.html">Japanese</a>
              </div>
          </div>
          <div class="dropdown">
              <button class="dropbtn">Hobbies
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="gaming.html">Gaming</a>
                  <a href="swimming.html">Swimming</a>
                  <a href="running.html">Running</a>
                  <a href="piano.html">Piano</a>
              </div>
          </div>
          <div class="dropdown">
              <button class="dropbtn">Tech
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="mpc.html">Mobile Phone Collection</a>
                  <a href="wacomemr.html">Wacom EMR</a>
                  <a href="perpro.html">Personal Projects</a>
              </div>
          </div>
          <a href="resources.html">Resources</a>
          <a href="links.html">Links</a>
          <div class="dropdown">
              <button class="dropbtn">Miscellaneous
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="misc.html">Miscellaneous</a>
              </div>
          </div>
        </div>
      </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);