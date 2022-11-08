import MainLayout from '/layouts/MainLayout';

export default function Home() {
	return <div>City Floral</div>;
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
