import PropTypes from 'prop-types';

function ShopifyStarter({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return <>{getLayout(<Component {...pageProps} />)}</>;
}

ShopifyStarter.propTypes = {
	Component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default ShopifyStarter;
