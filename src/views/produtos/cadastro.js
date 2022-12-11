import React from 'react';
import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}
class CadastroProduto extends React.Component {

    state = estadoInicial;

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeDoCampo = event.target.name;
        this.setState({
            [nomeDoCampo]: valor
        })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }

        try {
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({sucesso: true})
        } catch (error) {
            const errors = error.errors
            this.setState({errors: errors})
        }

    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    componentDidMount(){
        const sku = this.props.match.params.sku;
        console.log(sku)
        if (sku) {
            const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku);

            if (resultado.length === 1) {
                const produtoEncontrado = resultado[0];
                this.setState({...produtoEncontrado})
            }
        } 
    }

    render(){
        return (
            <div className='container mt-3'>
                <h3>Cadastro de Produtos</h3>
                <hr />
                { 
                    // Caso sucesso seja true carrega o alert
                    this.state.sucesso && 
                        <div className="mb-3 alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Cadastro realizado!</strong> O produto foi cadastrado com sucesso.
                        </div>
                }

                {
                    this.state.errors.length > 0 &&

                        this.state.errors.map(msg => {
                            return (
                                <div className="mb-3 alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> { msg }
                                </div>
                            )
                        })
                }
                
                <form className="form-horizontal">
                    <div className='row'>
                        <div className='mb-3 col-md-6'>
                            <label>Nome: *</label>
                            <input type='text' name='nome' value={this.state.nome} onChange={this.onChange} className='form-control' />
                        </div>
                        <div className='mb-3 col-md-6'>
                            <label>SKU: *</label>
                            <input type='text' name='sku' value={this.state.sku} onChange={this.onChange} className='form-control' />
                        </div>
                        <div className='mb-3 col-md-12'>
                            <label>Descrição: *</label>
                            <textarea className='form-control' name='descricao' value={this.state.descricao} onChange={this.onChange}></textarea>
                        </div>
                        <div className='mb-3 col-md-6'>
                            <label>Preço: *</label>
                            <input type='text' name='preco' value={this.state.preco} onChange={this.onChange} className='form-control' />
                        </div>
                        <div className='mb-3 col-md-6'>
                            <label>Fornecedor: *</label>
                            <input type='text' name='fornecedor' value={this.state.fornecedor} onChange={this.onChange} className='form-control' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button type="button" onClick={this.onSubmit} className='btn btn-success'>Salvar</button>
                        <button type='button' onClick={this.limpaCampos} className='btn btn-primary'>Limpar</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(CadastroProduto);