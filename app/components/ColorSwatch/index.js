"use client";

import PropTypes from "prop-types";
import { useState } from "react";

const ColorSwatch = ({ clipBoard }) => {
	const [bgColor, setBgColor] = useState("");

	const handleBgColor = () => {
		setBgColor(clipBoard);
	};

	return (
		<div className="flex flex-col items-center">
			<div
				className="w-80 h-80 flex items-center border-4 border-lightgray-300 rounded-3xl mb-6"
				style={{ backgroundColor: bgColor }}
				onClick={handleBgColor}
			>
				<p
					className={`text-xl text-center ${
						!bgColor ? "text-black" : "text-white"
					}`}
				>
					After selecting a color shade, click here to paste color into bordered
					background
				</p>
			</div>
		</div>
	);
};

ColorSwatch.propTypes = {
	clipBoard: PropTypes.string,
};

export default ColorSwatch;
