import React from "react";

export default (props) => (
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
                props.produtos.length > 0 ?

                    props.produtos.map((produto, index) => {
                        return (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.sku}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.fornecedor}</td>
                                <td>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary btn-sm" onClick={ () => props.editarAction(produto.sku) }>Editar</button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={ () => props.deletarAction(produto.sku) }>Remover</button>
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
)