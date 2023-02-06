import React from "react";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons/Icons";
import SlideItem from "../SlideItem/SlideItem";

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<section className="slider">
			<div className="wrapper">
				<div className="slides">
					<SlideItem />
				</div>

				<div className="control">
					<button className="prev">
						<ArrowPrevIcon />
					</button>

					<button className="next">
						<ArrowNextIcon />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Slider;
