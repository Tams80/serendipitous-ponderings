class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
        <style>
        .footer {
          margin-top; auto
          position: absolute; /* for it to disappear under last body element */
          float: left;
          left: 0;
          bottom: 0;  /* so the footer can stick to the bottom*/
          width: 100%;
          background-color: rgb(21, 67, 105);
          background-image: linear-gradient(to right, rgb(21, 67, 105),  rgb(38, 125, 196));
          color: white;
          text-align: center;
          position: absolute;                       
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