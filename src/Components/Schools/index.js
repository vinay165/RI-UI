import { useState } from 'react';
import Table from '../Table';
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
        key: "id",
        type: "text",
    },
    {
        label: "First Name",
        key: "firstName",
        type: "text",
        editable: true
    },
    {
        label: "Last Name",
        key: "lastName",
        type: "text",
        editable: true
    },
    {
        label: "Phone Number",
        key: "phoneNumber",
        type: "text",
        editable: true
    },
    {
        label: "Email",
        key: "email",
        type: "text",
        editable: true
    }
]

function Schools() {
    const [studentDetails, setStudentDetails] = useState(studentDetailsData);

    const onEdit = (updatedStudent) => {
        const updateStudentDetails = studentDetails.map(student => (
            student.id === updatedStudent.id ? updatedStudent : student));
        setStudentDetails(updateStudentDetails);
    }

    const onDelete = (id) => {
        const updateStudentDetails = studentDetails.filter(student => student.id !== id)
        setStudentDetails(updateStudentDetails);
    }

    return (
        <Table
            data={studentDetails}
            headers={headers}
            onEdit={onEdit}
            onDelete={onDelete} />
    );
}

export default Schools;
