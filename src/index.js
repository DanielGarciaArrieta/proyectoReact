import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Vista() {
    return <div>
        <h1>ESTO ES UN CONPONENTE</h1>
        <p>Daniel Jose Garcia Arrieta -- Tecnologo en Analisis y Desarrollo de Software</p>
        <button>Aceptar</button>
    </div>
}

root.render(<div>
    <Vista/>
</div>)