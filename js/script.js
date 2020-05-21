function main(){
  var valortotal = 0, count = 0, temitem = 0;
  item = document.getElementsByClassName('item');
  qtditens = item.length;
  for(var i=0; i<qtditens;i++){
      if(item[i].children[2].lastChild.value != 0){
        temitem = 1;
      }
  }
  if(temitem == 1){
    for(var i=0; i<qtditens;i++){
      if(item[count].children[2].lastChild.value==0){
        item[count].remove();
      }else{
        valoritem = parseFloat(item[count].children[2].lastChild.value,10) * tratarmoeda(item[count].children[1].innerHTML);
        valortotal = valortotal + valoritem;
        addchild("td","R$ "+valoritem.toFixed(2).toString().replace('.',','),item[count])
        item[count].children[2].innerHTML = item[count].children[2].lastChild.value; //pega o valor do input e coloca ele direto td
        count++;
      }
    }
    gerainterfacecomanda(valortotal);
  }else{
    alert("Por favor, adicione pelo menos um item para continuar!");
    temitem = 0;
  }
}

function tratarmoeda(num){
  var moeda = num;
  moeda = parseFloat(moeda.slice(3,10).replace(',','.'));
  return moeda;
}

function addchild(element, texto, pai){
  var elemento = document.createElement(element);
  var texto = document.createTextNode(texto);
  elemento.appendChild(texto);
  pai.appendChild(elemento);
}

function gerainterfacecomanda(valor){
  subtitulo = document.getElementsByClassName('subtitulo');
  relatorio = document.getElementsByClassName('relatorio');
  porcoes = document.getElementsByClassName('porcoes');
  espetinhocom = document.getElementsByClassName('espetinhocom');
  espetinhosim = document.getElementsByClassName('espetinhosim');
  bebidas = document.getElementsByClassName('bebidas');
  botao = document.getElementById('botao');
  total = document.getElementById('total');
  total.children[0].innerHTML = "Valor Total: R$ "+valor.toFixed(2).toString().replace('.',',');
  relatorio[0].children[1].innerHTML = "Valor Unitário";
  addchild("th","Valor Item",relatorio[0]);
  for(var i=0;i<subtitulo.length;i++){
      subtitulo[i].getAttributeNode("colspan").value = 4;
  }
  if(porcoes.length == 1){porcoes[0].remove();}
  if(espetinhocom.length == 1){espetinhocom[0].remove();}
  if(espetinhosim.length == 1){espetinhosim[0].remove();}
  if(bebidas.length == 1){bebidas[0].remove();}
  botao.remove();
}
