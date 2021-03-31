customElements.define('nav-home', class NavHome extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header >
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
          <ion-toolbar>           
              <ion-button size="xx-small" color="primary" class="botao_de_ordenacao">Cód.</ion-button>
              <ion-button size="xx-small" color="secondary" class="botao_de_ordenacao">Nome</ion-button>
              <ion-button size="xx-small" color="success" class="botao_de_ordenacao">Preço</ion-button>
              <ion-button size="xx-small" color="success" class="botao_de_ordenacao" slot="end" onClick="presentToast()">Múltiplos</ion-button>
        
          </ion-toolbar>
      </ion-header>

        <ion-content fullscreen>
          <ion-list>
          ${produtos['pizza'].map(prod => `
              <ion-item button onclick="showDetail('${prod.sabor}')">
                  <img src="${prod.icone}" width="100">
                <ion-label>
                  <h3>${prod.sabor}</h3>
                </ion-label>
                <ion-text>R$ ${prod.valor}</ion-text>
              </ion-item>
          `).join('\n')}
          </ion-list>          
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            
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
            <ion-title>${this.prod.sabor}</ion-title>            
            <ion-button  color="primary" slot="end" onClick="presentToast()"> 
              <ion-icon name="add-circle-outline" ></ion-icon>
              Adicionar
            </ion-button>
          </ion-toolbar>
        </ion-header>

        <ion-content fullscreen class="ion-padding">
            <ion-header>                
                <img src="${this.prod.icone}" width="100" />                
                <p>${this.prod.descricao}</p>
            </ion-header>            
          
            <ion-list>
                <ion-item>
                <ion-label>Tamanho:</ion-label>
                <ion-select value="" interface="popover">
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
            ${this.prod.itens_adicionais.map(item => `
              <ion-item>  
                <ion-checkbox slot="start" value="cebola" checked></ion-checkbox>
                <ion-label>${item.nome + ' ' +  item.valor}</ion-label>              
              </ion-item>
            `).join('\n')}
          </ion-list>
          <!-- Textarea in an item with a placeholder -->       
          <ion-textarea placeholder="Entre com mais informações aqui..."></ion-textarea>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            
          </ion-toolbar>
        </ion-footer>
      `;
    }
  });