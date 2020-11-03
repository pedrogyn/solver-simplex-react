import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class OperationCousts extends Component {

    formatMoney(value) {
        return `${VMasker.toMoney(value)}`
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Custos operacionais</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O1 - Desenvolvedores</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 4.500,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.o1)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, o1: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O2 - Armazenamento de imagens</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 8,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.o2)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, o2: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O3 - Implatações</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="US$ 4.000,00"
                            aria-describedby="basic-addon1"
                            value={this.formatMoney(this.props.values.o3)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, o3: value})
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default OperationCousts