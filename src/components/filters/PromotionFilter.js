import React from 'react';

const PromotionFilter = () => {
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

                        Ценовая
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Скидочная
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="m-2  "/>

                        Подарочная
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PromotionFilter;