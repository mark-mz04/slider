import React, { useState, useEffect } from 'react';
import s from './slider.module.css';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import slide4 from '../img/slide4.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Slider = () => {
	const imgList = [
		<img className={`${s.img}`} key={0} src={slide1} />,
		<img className={`${s.img}`} key={1} src={slide2} />,
		<img className={`${s.img}`} key={2} src={slide3} />,
		<img className={`${s.img}`} key={3} src={slide4} />,
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const prevIndex = activeIndex ? activeIndex - 1 : imgList.length - 1;
	const nextIndex = activeIndex === imgList.length - 1 ? 0 : activeIndex + 1;

	const handlerLeftClick = () => {
		setActiveIndex((current) => (current ? current - 1 : imgList.length - 1));
	};
	const handlerRightClick = () => {
		setActiveIndex((current) =>
			current === imgList.length - 1 ? 0 : current + 1
		);
	};

	useEffect(() => {
		setInterval(() => {
			setActiveIndex((current) => {
				const next = current === imgList.length - 1 ? 0 : current + 1;
				return next;
			});
		}, 4000);
	}, []);

	// console.log(activeIndex);

	return (
		<div className={s.container}>
			<FaChevronLeft onClick={handlerLeftClick} />

			<div className={s.slider}>
				<div className={`${s.slide} ${s.slidePrev}`} key={prevIndex}>
					{imgList[prevIndex]}
				</div>

				<div className={`${s.slide}`} key={activeIndex}>
					{imgList[activeIndex]}
				</div>

				<div className={`${s.slide} ${s.slideNext}`} key={nextIndex}>
					{imgList[nextIndex]}
				</div>
			</div>

			<FaChevronRight onClick={handlerRightClick} />
		</div>
	);
};
