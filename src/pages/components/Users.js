import * as React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
const Users = () => {
    const navigate = useNavigate()

    const goUsersniveluno = () => {
        navigate("/Dashboard/Users/Usersniveluno")
    }
    const goUsersniveldos = () => {
        navigate("/Dashboard/Users/Usersniveldos")
    }
    const goUsersniveltres = () => {
        navigate("/Dashboard/Users/Usersniveltres")
    }
    return (
        <div >
        <h1>Niveles de usuario</h1>
        <p>Subruta 3</p>
        <hr />
        <div>
              <button onMouseOver={goUsersniveluno}>
                <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/Dashboard/Users/Usersniveluno">Usersniveluno</NavLink>
              </button>
              <button onMouseOver={goUsersniveldos}>
                <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/Dashboard/Users/Usersniveldos">Usersniveldos</NavLink>
              </button>
              <button onMouseOver={goUsersniveltres}>
               <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/Dashboard/Users/Usersniveltres">Usersniveltres</NavLink>
              </button>
         </div>
         <Outlet /> 
        </div>
    )
}

export default Users;

/*
import * as React from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';
const Users = () => {
    const navigate = useNavigate()

    const goUsers = () => {
        navigate("/Dashboard/Users/Usersniveluno")
    }
    const goOrders = () => {
        navigate("/Dashboard/Orders/Userniveldos")
    }
    return (
        <div >
        <h1>Niveles de usuario</h1>
        <p>Subruta 3</p>
        <hr />
        <div>
         <Link to="/Dashboard/Users/Usersniveluno">Usersniveluno</Link>
         <Link to="/Dashboard/Users/Usersniveldos">Usersniveldos</Link>
         <Link to="/Dashboard/Users/Usersniveltres">Usersniveltres</Link>
         </div>
         <Outlet /> 
        </div>
    )
}

export default Users;


*/
