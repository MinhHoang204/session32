import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleClick = () => {
        console.log('da goi vao ham!');
        console.log('Name:', name);
        console.log('Email:', email);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('gia tri nguoi dung nhap vao', e.target.value);
        setName(e.target.value);
    };

    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            Form
            <div>
                <label htmlFor="name">Tên</label>
                <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={name}
                />
                <p>Tên người dùng nhập: {name}</p>
                
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={changeEmail}
                    value={email}
                />
                <p>Email người dùng nhập: {email}</p>
                
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    );
}
