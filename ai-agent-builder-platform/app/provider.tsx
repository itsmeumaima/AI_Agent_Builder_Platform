"use client"
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';
import { api } from '@/convex/_generated/api';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({
    children,
}:Readonly<{
    children: React.ReactNode;
}>){
    const {user} =useUser();
    const createUser=useMutation(api.user.CreateNewUser);
    const [userDetails, setUserDetails] = useState<any>();

    useEffect(()=>{
        user && CreateAndGetUser();
    },[user]);
    const CreateAndGetUser=async()=>{
        if (user){
            const result=await createUser({
                name:user.fullName??'',
                email:user.primaryEmailAddress?.emailAddress??''
            });
            console.log("User created or fetched:",result);
            setUserDetails(result);
        }
    }
    return(
        <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}
export default Provider;