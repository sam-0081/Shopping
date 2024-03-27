import React from 'react';

const BrandFilter = () => {
    return (
        <div>
            <div className={'flex-col'}>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  " />
                        Coca-Cola
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Pepsi
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Fanta
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Sprite
                    </label>
                </div>
            </div>

        </div>
    );
};

export default BrandFilter;