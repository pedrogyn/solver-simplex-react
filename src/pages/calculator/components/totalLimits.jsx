import React, { Component } from 'react'

class TotalLimits extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Totais investidos</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T1 - Tempo para recuperar investimento em meses</span>
                        <input type="text" className="form-control" placeholder="12" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T2 - Custo total do investimento</span>
                        <input type="text" className="form-control" placeholder="US$ 70.000,00" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">T3 - Capacidade máxima de implatações por mês</span>
                        <input type="text" className="form-control" placeholder="400" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TotalLimits