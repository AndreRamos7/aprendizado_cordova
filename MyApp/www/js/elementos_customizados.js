customElements.define('nav-home', class NavHome extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header >
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
          <ion-toolbar>
            <section>
              <header>Ordenar por:</header>
              <ion-button size="xx-small" color="primary" class="botao_de_ordenacao">Cód.</ion-button>
              <ion-button size="xx-small" color="secondary" class="botao_de_ordenacao">Nome</ion-button>
              <ion-button size="xx-small" color="success" class="botao_de_ordenacao">Preço</ion-button>
              <ion-button size="xx-small" color="success" class="botao_de_ordenacao" slot="end">Múltiplos</ion-button>
            </section>
          </ion-toolbar>
      </ion-header>

        <ion-content fullscreen>
          <ion-list>
          ${techs.map(tech => `
              <ion-item button onclick="showDetail('${tech.title}')">
                  <img src="${tech.icon}" width="100">
                <ion-label>
                  <h3>${tech.title}</h3>
                </ion-label>
                <ion-spinner name="lines"></ion-spinner>
              </ion-item>
          `).join('\n')}
          </ion-list>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-text color="primary">Total: R$ ${total}</ion-text>
            <ion-button size="xx-small" slot="end" color="primary" onclick="alert('oi');">Meus pedidos</ion-button>
          </ion-toolbar>
        </ion-footer>
      `;
    }
  });



  // =======================================


  customElements.define('nav-detail', class NavDetail extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header translucent>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>${this.tech.title}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
          <img src="${this.tech.icon}"  width="100" />
          <p>${this.tech.description}</p>
          
          <ion-list>
            <ion-item>
              <ion-label>Tamanho:</ion-label>
              <ion-select value="">
                <ion-select-option value="grande"> Grande, R$ 28,00 </ion-select-option>
                <ion-select-option value="media"> Média, R$ 25,00 </ion-select-option>
                <ion-select-option value="dog"> Pequena R$ 21,00 </ion-select-option>                  
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Bordas</ion-label>
              
              <ion-select name="bordas" interface="popover">
                <ion-select-option value="catupiri">catupiri</ion-select-option>
                <ion-select-option value="catchup">catchup</ion-select-option>
                <ion-select-option value="recheada">recheada</ion-select-option>
                <ion-select-option value="mostarda">mostarda</ion-select-option>
                <ion-select-option value="maionese">maionese</ion-select-option>
              </ion-select>
            </ion-item>              
          </ion-list>

          <!-- Checkboxes in a List -->
          <ion-label>Itens Opcionais</ion-label>
          <ion-list>
            <ion-item>  
              <ion-checkbox slot="start" value="cebola" checked></ion-checkbox>
              <ion-label>Cebola, R$ 0,50</ion-label>              
            </ion-item>
            <ion-item>
              <ion-checkbox slot="start" value="alho" ></ion-checkbox>
              <ion-label>Alho, R$ 0,50</ion-label>
            </ion-item>
            <ion-item>
              <ion-checkbox slot="start" value="azeitona"></ion-checkbox>
              <ion-label>Azeitona, R$ 0,50</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-text color="primary" id="valor_total">Total: R$ 00,00</ion-text>
            <ion-button size="xx-small" slot="end" color="primary">Adicionar</ion-button>
          </ion-toolbar>
        </ion-footer>
      `;
    }
  });