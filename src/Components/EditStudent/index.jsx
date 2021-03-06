import React from 'react';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import './index.scss';

const fields = [
    {
        label: "First Name",
        key: "firstName",
        type: "text"
    },
    {
        label: "Last Name",
        key: "lastName",
        type: "text"
    },
    {
        label: "Phone Number",
        key: "phoneNumber",
        type: "text"
    },
    {
        label: "Email",
        key: "email",
        type: "email"
    }
]

const EditStudent = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    onEdit,
    handleSubmit
}) => {
    const formik = useFormik({
        initialValues: {
            firstName,
            lastName,
            phoneNumber,
            email,
        },
        onSubmit: values => {
            onEdit(values);
            handleSubmit();
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} className='edit-student'>
                {fields.map(({ key, label, type }) => (
                    <div className='edit-student__field-container'>
                        <label htmlFor={key} className='edit-student__field-label'>{label}</label>
                        <input
                            className='edit-student__field'
                            id={key}
                            name={key}
                            type={type}
                            onChange={formik.handleChange}
                            value={formik.values[key]}
                        />
                    </div>
                ))}
                <div className='edit-student__footer'>
                    <Button
                        type="submit"
                        variant="primary"
                        className='edit-student__button'
                    >
                        Save
                    </Button>
                </div>
            </form>

        </>
    );
};

export default EditStudent;