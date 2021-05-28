import { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	const localUser = localStorage.getItem('userInfo');
	if (!user && localUser) {
		setUser(JSON.parse(localUser));
	}

	const login = async (email, password) => {
		const { data } = await axios.post('/api/users/login', { email, password }, config);
		setUser(data);
		localStorage.setItem('userInfo', JSON.stringify(data));

		return data;
	};

	const register = async (name, email, password) => {
		const { data } = await axios.post('/api/users/register', { email, name, password }, config);
		setUser(data);
		localStorage.setItem('userInfo', JSON.stringify(data));

		return data;
	};

	const logout = async () => {
		localStorage.removeItem('userInfo');
		setUser(undefined);
	};

	const contextValue = { user, setUser, login, register, logout };

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
