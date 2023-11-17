import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const CounterContext = React.createContext();

const CouterProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const CounterValue = useMemo(() => {
        return {
            count,
            increment: () => setCount((prev) => prev + 1),
            decrement: () => setCount((prev) => prev - 1)
        }
    }, [count])

    return (
        <CounterContext.Provider value={CounterValue}>
            {children}
        </CounterContext.Provider>
    )
}

CouterProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CouterProvider;