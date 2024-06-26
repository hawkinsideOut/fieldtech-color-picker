"use client";

import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { LoadingIcon } from "../LoadingIcon";

const ColorBoard = ({ colors, setClipBoard, loading }) => {
	const handleColorClick = async (color) => {
		try {
			await navigator.clipboard.writeText(color);
			setClipBoard(color);
			toast.success(`Copied ${color} to clipboard!`);
		} catch (error) {
			toast.error(`There was a problem copying ${color} to clipboard`);
			console.log(error);
		}
	};

	if (loading || Object.keys(colors).length === 0)
		return <LoadingIcon classNames={"flex items-center"} />;

	return (
		<>
			{Object.keys(colors).map((hexValue) => (
				<div
					key={hexValue}
					className="my-3"
				>
					{/* uppercase first letter and print the rest as is */}
					<h3>{hexValue.charAt(0).toUpperCase() + hexValue.slice(1)}</h3>
					<div className="flex">
						{colors[hexValue].map((colorShade) => (
							<div
								key={colorShade}
								className="h-10 w-10 mx-1 cursor-pointer border-2 border-black"
								style={{ backgroundColor: colorShade }}
								aria-label={`Select ${colorShade}`}
								onClick={() => handleColorClick(colorShade)}
							/>
						))}
					</div>
				</div>
			))}
		</>
	);
};

ColorBoard.propTypes = {
	colors: PropTypes.array.isRequired,
	setClipBoard: PropTypes.func.isRequired,
};

export default ColorBoard;
