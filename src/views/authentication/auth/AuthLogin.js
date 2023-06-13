import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';


import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { userLogin } from 'src/store/auth';


const AuthLogin = ({ title, subtitle, subtext }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const submitForm = () => {
        dispatch(userLogin(formData));
    }

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                    <CustomTextField id="username" variant="outlined" fullWidth name="username" value={formData.username} onChange={handleChange} />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                    <CustomTextField id="password" type="password" variant="outlined" fullWidth name="password" value={formData.password} onChange={handleChange} />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remeber this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={submitForm}
                >
                    Sign In
                </Button>
            </Box>

            {subtitle}
        </>
    )
};

export default AuthLogin;
