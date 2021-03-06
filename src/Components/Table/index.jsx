import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from '../Modal';
import EditStudent from '../EditStudent';
import Conditional from '../Conditional'
import './index.scss';

const studentDetailsData = [
    {
        "id": 1,
        "firstName": "Krish",
        "lastName": "Lee",
        "phoneNumber": "123456",
        "email": "krish.lee@learningcontainer.com"
    },
    {
        "id": 2,
        "firstName": "racks",
        "lastName": "jacson",
        "phoneNumber": "123456",
        "email": "racks.jacson@learningcontainer.com"
    },
    {
        "id": 3,
        "firstName": "denial",
        "lastName": "roast",
        "phoneNumber": "33333333",
        "email": "denial.roast@learningcontainer.com"
    },
    {
        "id": 4,
        "firstName": "devid",
        "lastName": "neo",
        "phoneNumber": "222222222",
        "email": "devid.neo@learningcontainer.com"
    },
    {
        "id": 5,
        "firstName": "jone",
        "lastName": "mac",
        "phoneNumber": "111111111",
        "email": "jone.mac@learningcontainer.com"
    }
]

const headers = [
    {
        label: "Id",
        key: "id"
    },
    {
        label: "First Name",
        key: "firstName"
    },
    {
        label: "Last Name",
        key: "lastName"
    },
    {
        label: "Phone Number",
        key: "phoneNumber"
    },
    {
        label: "Email",
        key: "email"
    }
]

function TableComponent() {
    const [studentDetails, setStudentDetails] = useState(studentDetailsData);
    const [searchText, setSearchText] = useState('');

    const onEdit = (updatedStudent) => {
        const updateStudentDetails = studentDetails.map(student => (
            student.id === updatedStudent.id ? updatedStudent : student));
        setStudentDetails(updateStudentDetails);
    }

    const onDelete = (id) => {
        const updateStudentDetails = studentDetails.filter(student => student.id !== id)
        setStudentDetails(updateStudentDetails);
    }

    if (!studentDetails.length) {
        return <div>No Data Found</div>;
    }

    const filteredStudentDetails = searchText === '' ? studentDetails : studentDetails.filter(student => (
        Object.values(student).some(value => String(value).includes(searchText))
    ))

    return (
        <div className='k-table'>
            <div className="row">
                <div className="col-md-4 offset-md-8 input-group k-table__search" xs={{ span: 3, offset: 9 }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} />
                    <span className="input-group-text k-table__search-icon" onClick={() => { setSearchText('') }}>
                        <i className="bi bi-x"></i>
                    </span>
                </div>
            </div>

            <Table responsive bordered hover>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Conditional condition={filteredStudentDetails.length}>
                        <>
                            {filteredStudentDetails.map((student, index) => (
                                <tr key={index}>
                                    {headers.map((header, index) => (
                                        <td key={index}>{student[header.key]}</td>
                                    ))}
                                    <td className="k-table__row-action">
                                        <Modal
                                            title='Edit'
                                            button={
                                                <i className="bi bi-pencil-square k-table__row-action-icon"></i>
                                            }
                                            hideFooter={true}
                                            render={(closeModal) => (
                                                <EditStudent
                                                    {...student}
                                                    onEdit={(values) => onEdit({ id: student.id, ...values })}
                                                    handleSubmit={closeModal}
                                                />
                                            )} />
                                        <Modal
                                            title='Delete'
                                            button={
                                                <i className="bi bi-trash k-table__row-action-icon k-table__row-action-delete"></i>
                                            }
                                            okButton='Delete'
                                            onClose={() => onDelete(student.id)}>
                                            <div className="k-table__delete-modal-body">
                                                Are you sure you want to delete?
                                            </div>
                                        </Modal>
                                    </td>
                                </tr>
                            ))}
                        </>

                        <div>No matching records found</div>
                    </Conditional>
                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent;
