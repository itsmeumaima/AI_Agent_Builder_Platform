import {v} from "convex/values";
import {mutation} from "./_generated/server";
import { emit } from "process";

/* The `mutation` function is being used to define a GraphQL mutation in
this TypeScript code snippet. It is creating a mutation called
`CreateNewUser` with specified arguments (`name` and `email`) and a
handler function that will be executed when the mutation is called. The
handler function checks if a user with the provided email already exists
in the database, and if not, it creates a new user entry with the
provided name, email, and a token value of 5000. If a user with the email
already exists, it returns the existing user data. */

export const CreateNewUser=mutation({
    args:{
        name:v.string(),
        email:v.string()
    },
    handler:async(ctx,args)=>{
        // if user already exists
        const user=await ctx.db.query('UserTable')
        .filter(q=>q.eq(q.field('email'),args.email))
        .collect();
        // if user does not exist, create new user
        if (user?.length===0){
            const userData={
                name:args.name,
                email:args?.email,
                token: 5000
            }

            const result=await ctx.db.insert('UserTable',userData);
            return userData;
        }
    return user[0];
    }
})
