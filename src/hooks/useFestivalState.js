import { useEffect, useState } from "react";
import * as festivalService from "../services/festivalService"

export const useFestivalState = (festivalId) => {

    const [festival, setFestival] = useState([]);

    useEffect(() => {
        festivalService.getById(festivalId) 
                       .then(result => {
                        setFestival(result)
                       })
    }, [festivalId]);
    
    
    return [
        festival,
        setFestival
    ]

}


export default useFestivalState;
