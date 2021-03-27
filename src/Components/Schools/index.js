import { useEffect, useState, useContext } from 'react';
import { getSchools, editSchool, deleteSchool } from '../../Api';
import headerConfig from './tableHeaderConfig';
import Context from '../../Context'
import Table from '../Table';
import './index.scss';

function Schools() {
    const { state, dispatch } = useContext(Context);
    const { schools } = state;

    useEffect(() => {
        getSchools().then(({ data }) => {
            const schools = data.responseObject;
            dispatch({
                type: 'SET_SCHOOLS',
                payload: schools
            })
        })
    }, [])

    const onEdit = (updatedSchool) => {
        editSchool(updatedSchool).then(() => {
            dispatch({
                type: 'EDIT_SCHOOL',
                payload: updatedSchool
            })
        })
    }

    const onDelete = (id) => {
        deleteSchool(id).then(() => {
            dispatch({
                type: 'DELETE_SCHOOL',
                payload: id
            })
        })
    }

    return (
        <Table
            data={schools}
            headers={headerConfig}
            onEdit={onEdit}
            onDelete={onDelete} />
    );
}

export default Schools;
