import PropTypes from 'prop-types';

import "./modalContainer.css"

export default function ModalContainer({
    children, show, handleClose, handlePrimary, primaryBtnName, secondaryBtnName }) {

    return (
        <div className="modalContainer"
            style={{ display: show ? 'block' : 'none' }}
            data-testid="modalContainer">
            <div className="modalContainer__overlay" onClick={handleClose}></div>
            <div className="modalContainer__content" data-testid="modalContent">
                {children}
                {primaryBtnName &&
                    <button
                        className="modalContainer__primary"
                        title={primaryBtnName}
                        onClick={handlePrimary}
                        data-testid="primary">
                        {primaryBtnName}
                    </button>}
                <button 
                    className="modalContainer__secondary" 
                    title={secondaryBtnName} 
                    onClick={handleClose} 
                    data-testid="secondary">
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
    primaryBtnName: PropTypes.string,
    secondaryBtnName: PropTypes.string
};

ModalContainer.defaultProps = {
    children: <div>Empty Modal</div>,
    show: false,
    handleClose: () => (false),
    handlePrimary: () => console.log("clicked primary"),
    primaryBtnName: "",
    secondaryBtnName: "Cerrar"
};