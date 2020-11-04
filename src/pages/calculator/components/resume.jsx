import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class Resume extends Component {

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
                        <span className="input-group-addon" id="basic-addon1">K1 - Target mensal do investimento</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            disabled={true}
                            value={this.formatMoney(this.props.values.k1)}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">K2 - Custo operacional mensal</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 70.000,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.k2)}
                            disabled={true}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">K3 - Comissão na plataforma de associados</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="400"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.k3 * 100)}
                            disabled={true}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">K4 - Comissão de vendas independentes</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="400"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.k4 * 100)}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume