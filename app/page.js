"use client";

import Image from "next/image";
import ColorPicker from "./components/ColorPicker";
import { useEffect, useState } from "react";

export default function Home() {
	const [colors, setColors] = useState([]);

	useEffect(() => {
		const data = {
			red: ["#ff0000", "#ff4d4d", "#ff6666", "#ff8080", "#ff9999"],
			blue: ["#0000ff", "#4d4dff", "#6666ff", "#8080ff", "#9999ff"],
			yellow: ["#ffff00", "#ffff4d", "#ffff66", "#ffff80", "#ffff99"],
			green: ["#00ff00", "#4dff4d", "#66ff66", "#80ff80", "#99ff99"],
			orange: ["#ff8000", "#ff944d", "#ff9966", "#ffad80", "#ffbf99"],
			purple: ["#800080", "#944d94", "#996699", "#ad80ad", "#bf99bf"],
		};
		setColors(data);
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{Object.keys(colors).length > 0 && <ColorPicker colors={colors} />}
		</main>
	);
}
