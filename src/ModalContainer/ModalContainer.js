import PropTypes from 'prop-types';

import "./modalContainer.css"

export default function ModalContainer({
    children, show, handleClose, handlePrimary, primaryBtnName, secondaryBtnName }) {

    return (
        <div className="modalContainer" style={{ display: show ? 'block' : 'none' }}>
            <div className="modalContainer__overlay" onClick={handleClose}></div>
            <div className="modalContainer__content">
                {children}
                {!!primaryBtnName &&
                    <button className="modalContainer__primary" title={primaryBtnName} onClick={handlePrimary}>
                        {primaryBtnName}
                    </button>}
                <button className="modalContainer__secondary" title={secondaryBtnName} onClick={handleClose}>
                    {secondaryBtnName}
                </button>
            </div>
        </div>
    );
}

ModalContainer.propTypes = {
    children: PropTypes.element,
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handlePrimary: PropTypes.func,
    primaryBtn: PropTypes.string,
    secondaryBtn: PropTypes.string
};

ModalContainer.defaultProps = {
    children: <div>Empty Modal</div>,
    show: false,
    handleClose: () => (false),
    handlePrimary: () => console.log("clicked primary"),
    primaryBtnName: "Confirmar",
    secondaryBtnName: "Cerrar"
};