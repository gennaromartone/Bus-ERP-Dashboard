import React from 'react';



const ModalDXLayout = ({close,children}) =>{

    return(
        <div className="modal-page">
            <div className="modal-background" onClick={close}></div>
            <div className="modal _5">
                <div className="closeModal" onClick={close}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" fill="#1F2F36"/>
                    </svg>
                </div>

                {children}
            </div>

            <style jsx>{`
                .modal-page{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9;
                    display: flex;
                    justify-content: flex-end;
                }
                .modal-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.3);
                    z-index: 10;
                    display: flex;
                    justify-content: flex-end;
                }
                .modal{
                    position:relative;
                    background: white;
                    z-index:11;
                }
                .closeModal{
                    position:absolute;
                    cursor:pointer;
                    top: calc( 0px + 1rem);
                    left: calc( -40px + -1rem);
                }
                ._5{
                    flex: 0 0 65%
                }
            `}</style>
        </div>
    )
}

export default ModalDXLayout;