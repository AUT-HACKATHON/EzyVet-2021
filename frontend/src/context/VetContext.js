import React, { useState } from 'react';

export const VetContext = React.createContext();

export const VetProvider = ({ children }) => {
	const [vetData, setVetData] = useState();

	const contextValue = {
		vetData,
		setVetData,
	};

	return <VetContext.Provider value={contextValue}>{children}</VetContext.Provider>;
};
