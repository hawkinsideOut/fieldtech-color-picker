"use client";

import { useEffect, useState } from "react";
import ColorBoard from "./ColorBoard";
import PropTypes from "prop-types";
import ColorSwatch from "./ColorSwatch";

const ColorPicker = () => {
	const [clipBoard, setClipBoard] = useState("");
	const [colors, setColors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const data = {
			red: ["#ff0000", "#ff4d4d", "#ff6666", "#ff8080", "#ff9999"],
			blue: ["#0000ff", "#4d4dff", "#6666ff", "#8080ff", "#9999ff"],
			yellow: ["#ffff00", "#ffff4d", "#ffff66", "#ffff80", "#ffff99"],
			green: ["#00ff00", "#4dff4d", "#66ff66", "#80ff80", "#99ff99"],
			orange: ["#ff8000", "#ff944d", "#ff9966", "#ffad80", "#ffbf99"],
			purple: ["#800080", "#944d94", "#996699", "#ad80ad", "#bf99bf"],
		};

		setTimeout(() => {
			setColors(data);
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div
			className="flex flex-col items-center"
			role="group"
			aria-labelledby="color-picker-label"
		>
			<h1
				id="color-picker-label"
				className="text-5xl mb-3 sr-only"
				aria-label="Color picker"
			>
				Color Picker
			</h1>
			<ColorSwatch clipBoard={clipBoard} />
			<div className="grid grid-cols-2 gap-4">
				<ColorBoard
					colors={colors}
					loading={loading}
					setClipBoard={setClipBoard}
				/>
			</div>
		</div>
	);
};

ColorPicker.propTypes = {
	colors: PropTypes.array.isRequired,
};

export default ColorPicker;
