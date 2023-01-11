import { useState, useContext } from "react";

import './login.styles.scss';
import { signInWithGooglePopup, createUserDocFromAuth, loginWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {FormInput} from '../ui/form-input.component';
import { Button } from "../ui/button.component";
import { UserContext } from "../../contexts/user.context";


const defaultFormFields= {    
    email:'',
    password:'',    
}

export default function LoginForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext)

    const handleChange = (event) => {
        const {name, value} = event.target //name of the input triggering the event
        setFormFields({...formFields, [name]: value});
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const loginWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocFromAuth(response.user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
            const response = await loginWithEmailAndPassword(email, password);
            setCurrentUser(response.user)
            resetFormFields();
            
        } catch (error){
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('email address not found');
                    break
                case 'auth/wrong-password':
                    alert("Incorrect password");
                    break
                default:
                    console.log(error);
            }
        }
    };


    return (
        <div className="registration-form-container">
            <h2>Already have an account ?</h2>
            <span>Login with your email and password</span>
            <form onSubmit={handleSubmit}>                             
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
                <div className="buttons-container">
                    <Button inputOptions={{type:'submit'}}>Login</Button>
                    <Button buttonType='google' inputOptions={{type:'button'}} onClick={loginWithGoogle}>Login with Google</Button>
                </div>
                
            </form>
        </div>
    );

}