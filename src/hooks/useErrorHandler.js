import { useState } from "react";

export function useErrorHandler(currentTarget, minCh, maxCh) {
    
    const [errors, setErrors] = useState({});
    

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

