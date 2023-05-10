import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthStyles.css'

export default function AuthScreen() {
    return (
        <>
            <div className='background'>
                <div className='form'>
                    <img className='icon-img' src={require('../images/icon.png')} />
                    <h1 className='title'>Вход в систему</h1>
                    <div className='input-container'>
                        <input className='input' placeholder='email' />
                        <input className='input' type='password' placeholder='Пароль' />
                    </div>
                    <div className='btn-container'>
                        <Link to="/register" className='link'>Нет аккаунта</Link>
                        <Link to="/profile">
                            <button className='btn-standard'>Войти</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}