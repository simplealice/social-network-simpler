import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/RegisterStyles.css'
import ReactDatePicker from 'react-datepicker';


export default function RegisterScreen() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthday, setBirthday] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [university, setUniversity] = useState('')
    
    // const navigate = useNavigate()

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

        
    // const [error, setError] = React.useState('');

    // const showError = (error, state) => {
    //     // console.log(error)
    //     state(error)
    //     setTimeout(() => {
    //         state('')
    //     }, 5500)
    // }

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: JSON.stringify({
    //         "birthday": birthday,
    //         "city": city,
    //         "email": email,
    //         "firstname": firstname,
    //         "lastname": lastname,
    //         "password": password,
    //         "university": university
    //     }),
    //     redirect: 'follow'
    // };

    // function checkIfValid() {
    //     // if (!isValidField(userInfo)) return showError('Необходимо заполнить все поля', setError)

    //     if (!(firstname === '') || firstname.length < 2) return showError('Имя должно содержать не менее 2 символов', setError)

    //     if (!(lastname === '') || lastname.length < 2) return showError('Фамилия должна содержать не менее 2 символов', setError)

    //     if (!email.trim()) return showError('Необходимо ввести почту', setError)

    //     return 1;
    // }

    // function register() {
    //     console.log(firstname)
    //     console.log(lastname)
    //     console.log(email)
    //     console.log(password)
    //     console.log(passwordAgain)
    //     console.log(email !== '')
    //     console.log(password === passwordAgain)
    //     if (email !== '' && firstname !== '' && lastname !== '' && password !== '' && password === passwordAgain) {
    //         fetch("http://192.168.31.15:8080/auth/register?role=USER", requestOptions)
    //         .then(response => response.text())
    //         .then(result => {
    //             console.log(result)
    //             navigate('/profile')
    //         })
    //         .catch(error => console.log('error', error));
    //     }
    // }

    return (
        <>
            <div className='background'>
                <div className='form-register'>
                    <img className='icon-img' alt='origami bird' src={require('../images/icon.png')} />
                    <h1 className='title'>Регистрация</h1>
                    {/* <h2 className='error'>{error}</h2>
                    {error ? <h2 className='error'>{error}</h2> : null} */}
                    <div className='input-container'>
                        <input className='input' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className='name-container'>
                            <input className='input2' placeholder='Фамилия' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            <input className='input2' placeholder='Имя' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <input className='input' placeholder='Дата рождения' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                        <input className='input' placeholder='Город' value={city} onChange={(e) => setCity(e.target.value)} />
                        <input className='input' placeholder='ВУЗ' value={university} onChange={(e) => setUniversity(e.target.value)} />
                        <div className='password-container'>
                            <input className='input2' type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input className='input2' type='password' placeholder='Повторите пароль' value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)}/>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <Link to="/" className='link'>Есть аккаунт</Link>
                        <Link to="/profile">
                            <button className='btn-standard'>Зарегистрироваться</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}