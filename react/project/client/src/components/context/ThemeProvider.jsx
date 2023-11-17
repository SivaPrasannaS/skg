import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(false);

    const ThemeValue = useMemo(() => {
        return {
            theme,
            toggle: () => setTheme(prev => !prev)
        }
    }, [theme]);

    const applyTheme = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        background: theme ? '#000' : '#fff',
        color: theme ? '#fff' : '#000'
    }


    return (
        <ThemeContext.Provider value={ThemeValue}>
            <div style={applyTheme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProvider;