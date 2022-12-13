import React from "react";
import ProdutoService from "../../app/produtoService";
import { withRouter } from "react-router";
import ProdutosTable from "../../components/produtoTable";
class ConsultaProduto extends React.Component {

    state = {
        produtos: []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({
            produtos: produtos
        })
    }

    preparaEditar = (sku) => {
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({produtos});
    }

    render() {
        return (
            <div className="container mt-3">
               <ProdutosTable produtos={this.state.produtos} editarAction={this.preparaEditar} deletarAction={this.deletar} />
            </div>
        )
    }

}

export default withRouter(ConsultaProduto);