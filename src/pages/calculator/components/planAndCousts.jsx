import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class PlanAndCousts extends Component {

    formatMoney(value) {
        return `${VMasker.toMoney(value)}`
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Planos e custos</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C1 - Custo do plano básico</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.c1)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, c1: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C2 - Custo do plano intermediário</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.c2)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, c2: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C3 - Custo do plano avançado</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 50,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.c3)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, c3: value})
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanAndCousts