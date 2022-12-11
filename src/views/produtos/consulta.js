import React from "react";
import ProdutoService from "../../app/produtoService";
import { withRouter } from "react-router";

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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.length > 0 ?

                                this.state.produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{produto.nome}</td>
                                            <td>{produto.sku}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.fornecedor}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => this.preparaEditar(produto.sku) }>Editar</button>
                                                    <button type="button" className="btn btn-danger btn-sm" onClick={ () => this.deletar(produto.sku) }>Remover</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            : 
                            <tr>
                                <td className="text-center" colSpan="5">Nenhum produto cadastrado</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default withRouter(ConsultaProduto);