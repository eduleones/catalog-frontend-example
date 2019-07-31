import React from 'react'

const Shoes = ({ shoes }) => {
    return (
        <div className="App">

            <div className="App-list">
                <ul className="App-list__container">

                    {shoes.map((shoe) => (
                        <li className="App-list__box">
                            <div className="App-list__content">
                                <ul className="App-list__content-card">
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Marca:</span>
                                        <span className="App-list__data">{shoe.brand}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Model:</span>
                                        <span className="App-list__data">{shoe.model}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Preço:</span>
                                        <span className="App-list__data">R$: {shoe.price}</span>
                                    </li>
                                    <li className="App-list__content-informations">
                                        <span className="App-list__title">Stock:</span>
                                        <span className="App-list__data">{shoe.stock}</span>
                                    </li>                                    
                                </ul>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
};

export default Shoes
