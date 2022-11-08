import MainLayout from '/layouts/MainLayout';

const NotFound404 = () => {
	return <div className="container mx-auto">Not Found</div>;
};

NotFound404.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default NotFound404;
