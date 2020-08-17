import React from 'react';
import { Link } from 'gatsby';

interface IProps {

}

const Logo: React.FC<IProps> = ({ children }) => {
	return (
		<Link to="/" className="font-bold text-2xl mr-auto">
			{children}
		</Link>
	);
}

export default Logo;