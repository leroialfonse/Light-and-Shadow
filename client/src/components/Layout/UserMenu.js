import React from 'react'
import { NavLink } from 'react-router-dom'



const UserMenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group buttons">
                    <h4>Dashboard</h4>
                    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action active" aria-current="true">
                        Profile
                    </NavLink>
                    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
                    {/*<NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink> */}
                </div>
            </div>
        </>
    )
}

export default UserMenu