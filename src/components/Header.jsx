/** @format */
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='bg-sky-500 w-full h-auto py-10 px-4 flex' data-cy='header-background'>
			<div className='max-w-7xl w-full mx-auto'>
				<Link to='/' data-cy='header-title' className='text-3xl font-bold text-white'>
					TODO LIST APP
				</Link>
			</div>
		</nav>
	);
};

export default Header;
