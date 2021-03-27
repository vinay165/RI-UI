import { createContext, useReducer, useMemo } from 'react';

const initialState = {
    schools: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_SCHOOLS':
            return { schools: action.payload };
        case 'EDIT_SCHOOL':
            const updatedSchool = action.payload;
            const updatedSchools = state.schools.map(school => (
                school.id === updatedSchool.id ? updatedSchool : school));
            return { schools: updatedSchools };
        case 'DELETE_SCHOOL':
            const schoolsAfterDelete = state.schools.filter(school => school.id !== action.payload)
            return { schools: schoolsAfterDelete };
        default:
            throw new Error();
    }
}

const Context = createContext(initialState);

export function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;