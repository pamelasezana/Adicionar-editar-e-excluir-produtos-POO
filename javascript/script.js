
var id  = 1;
var arrayprodutos = []

class Produto{
    constructor(){
        this.id =0;
        this.arrayprodutos = [];
        this.Editid = null;
       
    }
}

	function salvar() {
		let produto =  this.lerDados();
        if(this.validaCampo(produto))
        if (this.Editid == null) 
        {
            this.adicionar(produto);
        } else {
            this.atualizar(this.Editid, produto);
        }
    
        this.listaTabela( produto);
        this.cancelar();

	

	}
    
    function listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        
            
        
        for (let i = 0; i < this.arrayprodutos.length; i++){
            let tr =  tbody.insertRow();
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acao = tr.insertCell();
            td_id.innerHTML = arrayprodutos[i].id;
            td_produto.innerHTML = arrayprodutos[i].Nomeproduto;
            td_valor.innerHTML = arrayprodutos[i].preco;

            td_id.classList.add("center");
            let imgEdit = document.createElement("img");
            imgEdit.src = "images/editar.png";
            imgEdit.setAttribute("onclick", "editar(" + JSON.stringify(arrayprodutos[i] ) + ")");

            let imgDelete = document.createElement("img");
            imgDelete.src = "images/excluir.png";
            imgDelete.setAttribute("onclick", "deletar("+ arrayprodutos[i].id+") ");

            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDelete);  
        }    

    }

    function adicionar(produto){
        produto.preco = parseFloat(produto.preco);
        this.arrayprodutos.push(produto);
        this.id++;
    
    }
    function editar(dados){
        this.Editid = dados.id;
        document.getElementById("Produto").value = dados.Nomeproduto;
        document.getElementById("preco").value = dados.preco;

        document.getElementById('btn_1').innerHTML = 'Atualizar';
    }
    function atualizar(id, produto){
       for (let i = 0; i < this.arrayprodutos.length; i++) {
           if (this.arrayprodutos[i].id == id) {
                this.arrayprodutos[i].Nomeproduto = produto.Nomeproduto;
                this.arrayprodutos[i].preco = produto.preco;
           }
       
    }
}

	function cancelar() {
        document.getElementById("Produto").value = "";
        document.getElementById("preco").value = "";

        document.getElementById('btn_1').innerHTML = 'Salvar';
        this.Editid = null;
	}
    function deletar(id){
        if (confirm("Deseja realmente excluir o produto de ID" + id + " ?")) {
            let index = this.arrayprodutos.findIndex(x => x.id == id);
            this.arrayprodutos.splice(index, 1);
            this.listaTabela();
        }
    
    }

	function lerDados() {
	    let produto = {}

	    produto.id = this.id;
	    produto.Nomeproduto = document.getElementById("Produto").value;
	    produto.preco = document.getElementById("preco").value;

	    return produto;
	}
	
    function validaCampo(produto){
        msg = "";
        if(produto.Nomeproduto == '')
        {
            msg+= ("Preencha o campo nome do produto \n");
            
        }
        if(produto.preco == '')
        {
            msg+= ("Preencha o campo preco do produto \n");
            
        }
        if (msg != "")
        {
            alert(msg);
            return false;
        }
        return true;
    }
    
    
   



