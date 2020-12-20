import { useEffect, useState } from 'react';
import { getUserWithToken } from 'store/api';


const useRequireAuth = (LoginSuccess: Function) => {
    const token = localStorage.getItem('token');
    const [isUserLoginIn, setIsUserLoginIn] = useState<boolean>(false);
    useEffect(() => {
        const fetchUser = async (token: string) => {
            try {
                const { data: response } = await getUserWithToken(token);
                const { email,
                    lastName,
                    firstName,
                    password,
                    address,
                    cart } = response;
                LoginSuccess({ email, lastName, firstName, password, address, cart });
                setIsUserLoginIn(true);
            }
            catch {
                setIsUserLoginIn(false);
            }
            
        }
        if (token) fetchUser(token);
    }, [LoginSuccess]);
    return {
        isUserLoginIn,
    }
}

export { useRequireAuth };