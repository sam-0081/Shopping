import React from 'react';

const PropertyFilter = () => {
    return (
        <div>
            <div className={'flex-col'}>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  " />
                     0.5 л
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                       1 л
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        1.5 л
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>
                        2 л
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PropertyFilter;