import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import {index} from '../../end-points/Api';

const AddressBook=()=> {


    const navigate = useNavigate();
  
    const navigateToEdit=(state)=>{
        // e.preventDefault()
        // console.log(state.id)
        navigate(`edit/${state.id}`)
    }
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
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
            cell: (row) => [
                <a to="#" key={row.id} id={row.id} onClick={()=>{navigateToEdit(row)}} className="text-info" title="Edit"> <FontAwesomeIcon icon={faPen} /></a>,
                <span key="span" className=""> &nbsp; </span>,
                <Link key={`trash`+row.id} to="#"  className="text-danger" title="Delete" ><FontAwesomeIcon icon={faTrash} /></Link>,
            ]
        },
    ];
    let [address,setAddress]=useState([]);

	const fetchAddress = () => {
	    fetch(index,{headers:{
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 2|RVNIX0TtKK0LmABGvanueUiASfMMZzUJoxcR8A9u'
        }})
	      .then(response => {
		return response.json()
	      })
	      .then(data => {
		setAddress(data)
	      })
	}
      
	useEffect(() => {
	    fetchAddress()
	}, [])

	
    return (
        <>
            <div className="col-md-8 offset-md-2">
                <h5 className="text-primary">Address Book</h5>
                <DataTable
                    columns={columns}
                    data={address}
                />
            </div>
        </>
    );
}

export default AddressBook
