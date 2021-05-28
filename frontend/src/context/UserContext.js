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
	};

	const register = async (name, email, password) => {
		const { data } = await axios.post('/api/users/register', { email, name, password }, config);
		setUser(data);
		localStorage.setItem('userInfo', JSON.stringify(data));
	};

	const updateUser = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user?.token}`,
			},
		};
		const { data } = await axios.put(
			'/api/users/profile',
			{ email: user.email, name: user.name, liked: user.liked },
			config
		);
		setUser(data);
		localStorage.setItem('userInfo', JSON.stringify(data));
	};

	const logout = async () => {
		localStorage.removeItem('userInfo');
		setUser(undefined);
	};

	const contextValue = { user, setUser, login, register, logout, updateUser };

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
