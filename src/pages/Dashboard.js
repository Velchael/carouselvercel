import React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()

    const goUsers = () => {
        navigate("/Dashboard/Users")
    }
    const goOrders = () => {
        navigate("/Dashboard/Orders")
    }
    return (
        <div >
            <h1>Bienvenido al dashboard</h1>
            <p>React router dom</p>
            <hr />
            <div>
                
                <button onMouseOver={goUsers}>
                 <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/Dashboard/Users">Users </NavLink>
                </button>
                <button onMouseOver={goOrders}>
                 <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/Dashboard/Orders">Orders</NavLink>  
                </button>
                
            </div>
            <Outlet />
        </div>
    )
}

export default Dashboard;

/*import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div >
            <h1>Bienvenido al dashboard</h1>
            <p>React router dom</p>
            <hr />
            <div>
             <Link to="/Dashboard/Users">Users </Link>
             <Link to="/Dashboard/Orders">Orders</Link>
             
            </div>
            <Outlet />
        </div>
    )
}
export default Dashboard;*/