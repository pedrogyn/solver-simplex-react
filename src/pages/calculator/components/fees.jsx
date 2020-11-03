import React, { Component } from 'react'
import VMasker from 'vanilla-masker'

class Fees extends Component {

    constructor() {
        super()
        this.state = {
            i1: 10,
            i2: 5,
            i3: 30
        }
    }

    formatValue(value) {
        return `${VMasker.toPattern(value, '999')}`
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Taxas</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">I1 - Percentual de venda associada</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="10%"
                            aria-describedby="basic-addon1"
                            value={this.formatValue(this.props.values.i1)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, i1: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">I2 - Percentual de venda independente</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="10%"
                            aria-describedby="basic-addon1"
                            value={this.formatValue(this.props.values.i2)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, i2: value})
                            }}
                        />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">I3 - Lucro sobre a venda</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="10%"
                            aria-describedby="basic-addon1"
                            value={this.formatValue(this.props.values.i3)}
                            onChange={({ target: { value } }) => {
                                this.props.onChange({...this.props.values, i3: value})
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Fees