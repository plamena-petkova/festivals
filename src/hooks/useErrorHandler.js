import { useState } from "react";

export function useErrorHandler(eventType, currentTarget, minCh, maxCh) {
    
    const [errors, setErrors] = useState({});
    

    // let currentTarget = eventType.target.value;

    if (currentTarget.length < minCh) {
       setErrors(state => ({ ...state, currentTarget: `Your ${currentTarget} sould be at least ${minCh} characters!` }))
    } else if (currentTarget.length > maxCh) {
        setErrors(state => ({ ...state, currentTarget: `Your ${currentTarget} sould be max ${maxCh} characters!` }))
    } else {
        setErrors(state => ({ ...state, currentTarget: false }));
    }
    return [
        errors,
        setErrors
    ];
    };
    
export default useErrorHandler;

// export const usernameChangeHandler = (e) => {
//     e.preventDefault();

//     let currentUsername = e.target.value;


//     if (currentUsername.length < 3) {
//         setErrors(state => ({ ...state, username: 'Your username sould be at least 3 characters!' }))
//     } else if (currentUsername.length > 20) {
//         setErrors(state => ({ ...state, username: 'Your username sould be max 12 characters!' }))
//     } else {
//         setErrors(state => ({ ...state, username: false }));
//     }
// }

// export const passChangeHandler = (e) => {
//     e.preventDefault();

//     let currentPass = e.target.value;


//     if (currentPass.length < 6) {
//         setErrors(state => ({ ...state, pass: 'Your password sould be at least 6 characters!' }))
//     } else if (currentPass.length > 20) {
//         setErrors(state => ({ ...state, pass: 'Your password sould be max 12 characters!' }))
//     } else {
//         setErrors(state => ({ ...state, pass: false }));
//     }
// }

