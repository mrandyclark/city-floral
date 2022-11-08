import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<main className="flex flex-col flex-grow">{children}</main>
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.object.isRequired,
};

export default MainLayout;
