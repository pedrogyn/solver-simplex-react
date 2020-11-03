import React, { Component } from 'react'

class PlanAndCousts extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Planos e custos</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C1 - Custo do plano básico</span>
                        <input type="text" className="form-control" placeholder="US$ 30,00" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C2 - Custo do plano intermediário</span>
                        <input type="text" className="form-control" placeholder="US$ 30,00" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">C3 - Custo do plano avançado</span>
                        <input type="text" className="form-control" placeholder="US$ 30,00" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanAndCousts