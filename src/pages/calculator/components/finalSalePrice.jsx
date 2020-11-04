import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class FinalSalePrice extends Component {

    formatMoney(value) {
        return `${VMasker.toMoney(value)}`
    }

    formatValue(value) {
        return `${VMasker.toPattern(value, '999')}`
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Valores Resumidos</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">V1 - Preço final de venda da contratação do Plano Básico</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            disabled={true}
                            value={this.formatMoney(this.props.values.v1)}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">V2 -  Preço final de venda da contratação do Plano Intermediário</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 70.000,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.v2)}
                            disabled={true}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">V3 -  Preço final de venda da contratação do Plano Avançado</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="400"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.v3)}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FinalSalePrice