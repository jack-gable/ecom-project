import { Raleway } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
	title: "Athletic Sole",
	description: "Shoe e-commerce store",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<StyledComponentsRegistry>
					<Header />
					{children}
					<GlobalStyles />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
