const headers = [
    {
        label: "Id",
        key: "id",
        type: "text",
    },
    {
        label: "School Name",
        key: "name",
        type: "text",
        editable: true
    },
    {
        label: "Phone Number",
        key: "phone",
        type: "text",
        editable: true
    },
    {
        label: "Address",
        key: "addressOne",
        type: "text",
        editable: true,
        render: (record) => (
            <span>
                {record.addressOne}
                {record.addressTwo && `, ${record.addressTwo}`}
            </span>
        )
    },
    {
        key: "addressTwo",
        type: "text",
        editable: true,
        editOnly: true
    },
    {
        label: "City",
        key: "city",
        type: "text",
        editable: true
    },
    {
        label: "State",
        key: "state",
        type: "text",
        editable: true
    }
]

export default headers;