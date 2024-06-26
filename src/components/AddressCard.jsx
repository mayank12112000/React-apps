import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAddress } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'

export default function AddressCard({address}) {
    const {id,type,houseNo,city,State,pinCode,Country,mobile} = address
    const dispatch = useDispatch()

  return (
    <div className='container'>
                <div className='user-details'>
                    <h4><small>{type}:</small></h4>
                    <p>{`${houseNo}, ${city}, ${State}, ${Country}, ${pinCode}`}</p>
                    <p>Phone number: {mobile}</p>
                    <Link to={`/user_profile/address/${id}`}>
                    <button className='btn btn-outline-secondary'> <b>edit</b></button>
                    </Link>
                    <button onClick={()=>dispatch(removeAddress(id))} className='btn mx-3 btn-outline-danger'> <b>remove</b></button>
                </div>
                <hr />
            </div>
  )
}
