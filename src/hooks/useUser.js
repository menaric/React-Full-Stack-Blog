import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubrscribe = onAuthStateChanged(getAuth(), user => {
            setUser(user);
            setIsLoading(false);
        });

        return unsubrscribe;
    }, []);

    return {user, isLoading}; 

}

export default useUser; 

