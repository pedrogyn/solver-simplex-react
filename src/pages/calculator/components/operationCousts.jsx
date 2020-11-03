import React, { Component } from 'react'

class OperationCousts extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Custos operacionais</div>
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O1 - Desenvolvedores</span>
                        <input type="text" className="form-control" placeholder="US$ 4.500,00" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O2 - Armazenamento de imagens</span>
                        <input type="text" className="form-control" placeholder="US$ 8,33" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">O3 - Implatações</span>
                        <input type="text" className="form-control" placeholder="US$ 1.200,00" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default OperationCousts