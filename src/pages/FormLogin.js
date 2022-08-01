    import React            from 'react';
    import FormInput        from '../components/FormInput';
    import { Alert }        from 'react-bootstrap';
    import { useState }     from 'react';
    import { useNavigate }  from 'react-router-dom';
    
    const FormLogin = () => {
    const [inputs,setValue] = useState({
        email               : '',
        password            : '',
        confirm_password    : ''
    })
    const [alert,setAlert] = useState(false)
    const navigate = useNavigate();

    

    
    function handleChange(e){
        
        setValue({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    function checkDashboard(){
        const passValue  = inputs.password
        const confirmVal = inputs.confirm_password

        if (passValue === confirmVal ){
            if ( passValue === '' && confirmVal === '') {
                setAlert(true)
            }
            else{
                return navigate('/dashboard')
            }
        } 
        else {
            alert('Check Your Password Again !!!')
            setValue({
                email               : '',
                password            : '',
                confirm_password    : ''
            })
        }
    }

    
    function handleSubmit(e){
        
        e.preventDefault()
        console.log(inputs);
        checkDashboard()

    }
    return (
        <div>
            <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="/assets/images/img-01.png" alt="IMG"/>
				</div>
                

				<form onSubmit={handleSubmit} class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>
                {
                    alert ? 
                        <Alert style = {{
                            width           : '50%' , 
                            height          : '15%', 
                            margin          : 'auto', 
                            textAlign       : 'center', 
                            marginBottom    : '8%'
                        }} variant="success">Empty Field</Alert>  
                        : null
                }
					<FormInput
                        type        = "text"
                        name        = "email"
                        icon        = "fa fa-envelope"
                        value       = {inputs.nama}
                        event       = {handleChange}
                        placeholder = "Email"
                    
                    />
					<FormInput
                        type        = "password"
                        name        = "password"
                        icon        = "fa fa-lock"
                        value       = {inputs.password}
                        event       = {handleChange}
                        placeholder = "password"
                    
                    />
					<FormInput
                        type        = "password"
                        name        = "confirm_password"
                        icon        = "fa fa-lock"
                        value       = {inputs.confirm_password}
                        event       = {handleChange}
                        placeholder = "confirm password"
                    
                    />
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
        </div>
    )
    }
            
    export default FormLogin
