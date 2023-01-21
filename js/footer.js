class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <style>

        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: rgb(21, 67, 105);
          background-image: linear-gradient(to right, rgb(21, 67, 105) ,  rgb(38, 125, 196));
          color: white;
          text-align: center;
        }
        </style>

        <footer>
            <div class="footer">
                <p>Tams80 - 2023</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);