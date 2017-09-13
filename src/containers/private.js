import {Redirect , Route} from 'react-router';
import React from 'react';
const Proutes = ({component:Values, ...rest})=>(
    <Route {...rest} render={props =>(
    localStorage.getItem("token") ? (<Values {...props}/>
    ): (
        <Redirect to ={{
            pathname:'/login',
        }}/>
    )
)}/>
)
export default Proutes