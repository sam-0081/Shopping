import React from 'react';

const PriceFilter = ({onFilterChange}) => {
    const [min, setMin] = React.useState(0);
    const [max, setMax] = React.useState(0);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === 'min') {
            setMin(value);
            onFilterChange({ min: value ? Number(value) : '', max });
        }
        if (name === 'max') {
            setMax(value);
            onFilterChange({ min, max: value ? Number(value) : '' });
        }
    }

    return (
        <div>
            <div className={'flex gap-4' }>
                <input
                    className="py-1 pl-2 w-full rounded-xl border border-gray-300 focus:outline-none focus:bg-amber-50"
                    type="number"
                    name={'min'}
                    value={min}
                    onChange={handleFilterChange}
                    placeholder="От"
                />
                <input
                    className="py-1 pl-2 w-full rounded-xl border border-gray-300 focus:outline-none focus:bg-amber-50"
                    type="number"
                    name={'max'}
                    value={max}
                    onChange={handleFilterChange}
                    placeholder="До"
                />
            </div>
        </div>
    );
};

// onChange={(e) => setMax(Number(e.target.value))}


export default PriceFilter;