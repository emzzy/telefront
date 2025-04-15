import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import "../styles/RegisterForm.css"
import { validateEmail } from '../utils';


const PasswordErrorMessage = () => {
    return (
        <p className='FieldError'>Password should have at least 8 characters</p>
    );
};

function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "", 
        isTouched: false
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole) {
            setFormData(prev => ({ ...prev, role: userRole}));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const getIsFormValid = () => {
        return (
            firstName &&
            lastName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            phone &&
            gender &&
            location &&
            dateOfBirth &&
            role != 'role'
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false
        });
        setPhone("");
        setGender("");
        setLocation("");
        setDateOfBirth("");
        setRole("");
    };
    const name = method === 'register';

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
            
        try {
            const res = await api.post('api/user/signup/', {
                firstName,
                lastName,
                email,
                password,
                phone,
                gender,
                location,
                dateOfBirth
            });
            if (res.status === 200 || res.status === 201) {
                alert("Account created!");
                clearForm();

                if (name) {
                    if (res.data.token) {
                        localStorage.setItem('ACCESS_TOKEN', res.data.token);
                    }
                }
                navigate()
            }
        }
        catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again";
            alert(errorMessage);
            console.error("Registration error:", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="RegisterForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Register</h1>
                    <input type="hidden" name="role" value="" />
                    <div className="Field">
                        <label>
                            First name <sup>*</sup> 
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First name"
                        />
                    </div>
                    <div className="Field">
                        <label for="lastName" class="form-label">Last Name <sup>*</sup></label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Email <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Phone <sup>*</sup>
                        </label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Mobile number"
                        />
                    </div> 
                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            type="password"
                            value={password.value}
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value})
                            }}
                            placeholder="Password"
                        />
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage />
                        ) : null}
                    </div>
                    <div className="Field">
                        <label>
                            Confirm Password <sup>*</sup>
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Gender <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="Gender"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Location <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Date of Birth <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            placeholder="Date of birth"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            placeholder="User role"
                        />
                    </div>
                    <div class="text-center">
                        <button type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default RegisterForm