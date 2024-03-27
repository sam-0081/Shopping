import React from 'react';

const ManufacturerFilter = () => {
    return (
        <div>
            <div className={'flex-col'}>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  " />
                     Все
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Константиновский завод
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Московский завод
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Санкт-Петербургский завод
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ManufacturerFilter;