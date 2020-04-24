import React from 'react';
import Auth from './userAuth';

const Login = () => {
    const auth = Auth();
    //console.log(auth);

    const signInWithGoogle = ()=>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/review';

        })

      }

      const signOutFromGoogle = ()=>{

        auth.signOut()
        .then(res =>{
            window.location.pathname ='/shop'
        })
    }

    return (
        <div>
            <h2>Login Page Under Development, Coming soon!!</h2>
            
            {
                auth.user ? <button onClick={signOutFromGoogle}>Sing Out</button> :
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            }
        </div>
    );
};

export default Login;