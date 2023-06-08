import React, { useState, useContext } from "react";

export const LoginPage = () => {

    const inputContainer = (props) => {

        return <><div style={{ borderRadius: 16 }}><div style={{ height: 600, width: 400, background: 'white', display: 'inline-block', justifyContent: 'center', alignItems: 'center' }}>
          
        </div><div style={{ height: 600, width: 400, background: 'blue', display: 'inline-block', justifyContent: 'center', alignItems: 'center',backgroundImage:'url("https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg")',backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>

            </div></div></>
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', background: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                {inputContainer()}
            </div>
        </>
    );
};

export default LoginPage;
