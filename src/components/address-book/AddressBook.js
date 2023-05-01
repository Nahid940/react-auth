import React from 'react'
import {Link} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
const columns = [
    {
        name: 'Name',
        selector: row => row.title,
        sortable: false,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
        sortable: false,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: false,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: false,
    },
    {
        name: 'Age',
        selector: row => row.age,
        sortable: true,
    },
    {
        name: 'Website',
        selector: row => row.website,
        sortable: false,
    },
    {
        name: 'Nationality',
        selector: row => row.nationality,
        sortable: false,
    },
    {
        name: 'Action',
        selector: row => row.action,
        sortable: false,
        button:true,
        cell: () => [
            <Link key="1" to="/edit" className="text-info" title="Edit" onClick={handleButtonClick}> <FontAwesomeIcon icon={faPen} /></Link>,
            <span key="span" className=""> &nbsp; </span>,
            <Link key="2" to="#"  className="text-danger" title="Delete" onClick={handleButtonClick}><FontAwesomeIcon icon={faTrash} /></Link>,
        ]
    },

];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const handleButtonClick = () => {
		
    console.log('clicked');
};

function AddressBook() {
    return (
        <div className="col-md-8 offset-md-2">
            
            <h5 className="text-primary">Address Book</h5>
             <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default AddressBook
