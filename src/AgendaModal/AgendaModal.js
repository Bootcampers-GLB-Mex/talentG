import React from 'react';
import './agendaModal.css';

function AgendaModal() {
    return (
        <section className="agenda__modal">
            <h2 className="agenda__modal--title">Agenda</h2>
            <div className="tab">
            <input id="tab-1" type="checkbox"/>
            <label for="tab-1">Dia 1 - CSS</label>
            <textarea class="tab-content"></textarea>
            </div>

            <div className="tab">
            <input id="tab-2" type="checkbox"/>
            <label for="tab-2">Dia 2 - HTML Semantico</label>
            <textarea class="tab-content"></textarea>
            </div>

            <div className="tab">
            <input id="tab-3" type="checkbox"/>
            <label for="tab-3">Dia 3</label>
            <textarea class="tab-content"></textarea>
            </div>

            <button className="agenda__modal--btn">Cerrar</button>
        </section>
    )
}

export default AgendaModal
