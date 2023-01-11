import { useState, useContext } from "react";

import './registration-form.styles.scss'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../ui/form-input.component";
import { Button } from "../ui/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields= {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

export default function RegistrationForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext)

    const handleChange = (event) => {
        const {name, value} = event.target //name of the input triggering the event
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(response.user)

            await createUserDocFromAuth(response.user, {displayName: displayName})
            resetFormFields();
        } catch (error){
            console.log('Unable to create user :( ', error);
        }

    };


    return (
        <div className="registration-form-container">
            <h2>Don't have an account ?</h2>
            <span>Register with your email and password</span>
            <form onSubmit={handleSubmit}>                
                <FormInput
                    label='Display Name' 
                    inputOptions = {{
                        type:'text',
                        name:'displayName',
                        required:true,
                        onChange:handleChange,
                        value:displayName,
                    }}
                />
                <FormInput
                    label='Email' 
                    inputOptions = {{
                        type:'email',
                        name:'email',
                        required:true,
                        onChange:handleChange,
                        value:email,
                    }}
                />
                <FormInput
                    label='Password' 
                    inputOptions = {{
                        type:'password',
                        name:'password',
                        required:true,
                        onChange:handleChange,
                        value:password,
                    }}
                />
                <FormInput
                    label='Confirm Password' 
                    inputOptions = {{
                        type:'password',
                        name:'confirmPassword',
                        required:true,
                        onChange:handleChange,
                        value:confirmPassword,
                    }}
                />
                <Button inputOptions={{type:'submit'}}>Register</Button>
            </form>
        </div>
    );

}