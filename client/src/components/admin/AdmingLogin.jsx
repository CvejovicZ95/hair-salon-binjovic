import React, { useState } from "react";
import { useLoginAdmin } from "../../hooks/useAdminLoginLogout"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { loginHandler } = useLoginAdmin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginHandler(username, password)
    }

    return (
        <div>
            <form className="admin" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="submit">Uloguj se</button>
            </form>
            <ToastContainer/>
        </div>
    )
}