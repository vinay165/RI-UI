import React from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import './index.scss';

const EditTableData = ({
    data,
    headers,
    onEdit,
    handleSubmit
}) => {

    const fields = headers.filter(({ editable }) => editable);
    const formik = useFormik({
        initialValues: fields.reduce((obj, { key }) => {
            obj[key] = data[key];
            return obj
        }, {}),
        onSubmit: values => {
            onEdit(values);
            handleSubmit();
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} className='k-table-edit'>
                {fields.map(({ key, label, type }) => (
                    <div className='k-table-edit__field-container' key={key}>
                        <label htmlFor={key} className='k-table-edit__field-label'>{label}</label>
                        <input
                            className='k-table-edit__field'
                            id={key}
                            name={key}
                            type={type}
                            onChange={formik.handleChange}
                            value={formik.values[key]}
                        />
                    </div>
                ))}
                <div className='k-table-edit__footer'>
                    <Button
                        type="submit"
                        variant="primary"
                        className='k-table-edit__button'
                    >
                        Save
                    </Button>
                </div>
            </form>

        </>
    );
};

export default EditTableData;