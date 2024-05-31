"use client";

import { useState } from "react";
import ColorBoard from "./ColorBoard";
import PropTypes from "prop-types";
import ColorSwatch from "./ColorSwatch";

const ColorPicker = ({ colors }) => {
	const [clipBoard, setClipBoard] = useState("");

	return (
		<div
			className="flex flex-col items-center"
			role="group"
			aria-labelledby="color-picker-label"
		>
			<h1
				id="color-picker-label"
				className="text-5xl mb-3 sr-only"
			>
				Color Picker
			</h1>
			<ColorSwatch clipBoard={clipBoard} />
			<div className="grid grid-cols-2 gap-4">
				<ColorBoard
					colors={colors}
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
