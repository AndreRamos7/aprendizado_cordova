// ===========================================================================
// ===========================================================================
// ===========================================================================
  var o_produto;

  customElements.define('nav-detail', class NavDetail extends HTMLElement {
    connectedCallback() {
      o_produto = this.prod;
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
                <ion-checkbox class="itens_adicionais" id="" slot="start" value="${item.nome}" checked></ion-checkbox>
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
      document.getElementById("bordas").addEventListener('ionChange', bordasModificado, false);
      var itens_adicionais = document.getElementsByClassName("itens_adicionais");     
      
      Array.prototype.map.call(itens_adicionais, iten => {iten.addEventListener('ionChange', it => console.log(it.detail.value + ' ' + it.detail.checked), false) });     
     
    }
   
  });
  
  function tamanhoModificado() {
    console.log(document.getElementById("tamanho").value + " .. " + o_produto);
  }
  function bordasModificado() {
    console.log(document.getElementById("bordas").value + " .. " + o_produto);
  }
  function itensModificado() {
    console.log(document.getElementById("bordas").value + " .. " + o_produto);
  }

 

