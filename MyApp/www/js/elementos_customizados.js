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

// ===========================================================================
// ===========================================================================
// ===========================================================================


  customElements.define('nav-detail', class NavDetail extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header translucent>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>${this.prod.sabor}</ion-title>            
            <ion-button  color="primary" slot="end" 
              onClick="adicionar_produto(
                
                {'nome':'${this.prod.sabor}', 
                'valor': '${this.prod.valor}',
                'tipo_valor': '${this.prod.tipo[0].valor}'}
                
                )"> 
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

                  <ion-select id="tamanho" value="" interface="popover">
                    ${this.prod.tipo.map(item => `
                      <ion-select-option value="${item.tamanho}"> 
                          ${item.tamanho + ', ' +  item.valor}              
                      </ion-select-option >
                    `).join('\n')}
                  </ion-select>
                </ion-item>

                <ion-item>
                  <ion-label>Bordas</ion-label>                
                  <ion-select id="bordas" name="bordas" interface="popover">
                  ${this.prod.bordas.map(item => `
                      <ion-select-option value=" ${item.nome}">
                      ${item.nome + ', '} 
                      </ion-select-option>
                  `).join('\n')}   
                  </ion-select>
                </ion-item>              
            </ion-list>

          <!-- Checkboxes in a List -->
          <ion-label>Itens Opcionais</ion-label>
          <ion-list>
            ${this.prod.itens_adicionais.map(item => `
              <ion-item>  
                <ion-checkbox id="${item.nome}" slot="start" value="cebola" checked></ion-checkbox>
                <ion-label>${item.nome + ' ' +  item.valor}</ion-label>              
              </ion-item>
            `).join('\n')}
          </ion-list>
          <!-- Textarea in an item with a placeholder -->       
          <ion-textarea id="obs" placeholder="Entre com mais informações aqui..."></ion-textarea>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            
          </ion-toolbar>
        </ion-footer>
      `;
      
      document.getElementById("tamanho").addEventListener('ionChange', tamanhoModificado, false);
     
    }
   
  });
  
  function tamanhoModificado() {
    console.log(document.getElementById("tamanho").value + " .. ");
  }

  const nav = document.querySelector('ion-nav');

  function showDetail(sabor) {
    const prod = produtos.pizza.find(prod => prod.sabor === sabor);
    nav.push('nav-detail', { prod });
  }