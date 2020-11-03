import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class TotalLimits extends Component {

    formatMoney(value) {
        return `${VMasker.toMoney(value)}`
    }

    formatValue(value) {
        return `${VMasker.toPattern(value, '999')}`
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Totais investidos</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T1 - Tempo para recuperar investimento em meses</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            value={this.formatValue(this.props.values.t1)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, t1: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T2 - Custo total do investimento</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 70.000,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.t2)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, t2: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T3 - Capacidade máxima de implatações por mês</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="400"
                            aria-describedby="basic-addon1"
                            value={this.formatValue(this.props.values.t3)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, t3: value})
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TotalLimits