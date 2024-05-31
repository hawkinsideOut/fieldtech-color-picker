import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "FieldTech Color Picker",
	description: "For a technical assessment",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ToastContainer
					position="bottom-right"
					theme="colored"
				/>
			</body>
		</html>
	);
}
