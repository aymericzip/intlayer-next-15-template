import { IntlayerClientProvider, type NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import PageContent from "@/components/pageContent/PageContent";

const Home: NextPageIntlayer = async ({ params }) => {
	const { locale } = await params;

	return (
		<IntlayerClientProvider locale={locale}>
			<IntlayerServerProvider locale={locale}>
				<PageContent />
			</IntlayerServerProvider>
		</IntlayerClientProvider>
	);
};

export default Home;
