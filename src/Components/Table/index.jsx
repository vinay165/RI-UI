import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from '../Modal';
import Edit from './Edit';
import Conditional from '../Conditional'
import './index.scss';

function TableComponent({
    data = [],
    headers,
    onEdit = () => { },
    onDelete = () => { },
}) {
    const [searchText, setSearchText] = useState('');

    if (!data.length) {
        return <div>No Data Found</div>;
    }

    const filteredData = searchText === '' ? data : data.filter(item => (
        Object.values(item).some(value => String(value).includes(searchText))
    ))

    const tableHeaders = headers.filter(({ editOnly }) => !editOnly);

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
                        {tableHeaders.map((header, index) => (
                            <th key={index}>{header.label}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Conditional condition={filteredData.length}>
                        <>
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    {tableHeaders.map((header, index) => (
                                        <td key={index}>{header.render ? header.render(item) : item[header.key]}</td>
                                    ))}
                                    <td className="k-table__row-action">
                                        <Modal
                                            title='Edit'
                                            button={
                                                <i className="bi bi-pencil-square k-table__row-action-icon"></i>
                                            }
                                            hideFooter={true}
                                            render={(closeModal) => (
                                                <Edit
                                                    headers={headers}
                                                    data={item}
                                                    {...item}
                                                    onEdit={(values) => onEdit({ ...item, ...values })}
                                                    handleSubmit={closeModal}
                                                />
                                            )} />
                                        <Modal
                                            title='Delete'
                                            button={
                                                <i className="bi bi-trash k-table__row-action-icon k-table__row-action-delete"></i>
                                            }
                                            okButton='Delete'
                                            onClose={() => onDelete(item.id)}>
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
