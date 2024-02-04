'use client';

import { useEffect, useState } from 'react';

/**
 * Build 3x3 grid Of light cells (omitting the center cell)
 * where you can click on the cells to activate them. turning
 * ghemgr_eeo- When all the cells have been activated, they
 * will be deactivated one by one in the reverse order they
 * were activated with a 300ms interval in between.
 * @link https://youtu.be/sAF7Km_znjA?si=3E8-vaRtZcQmshBM
 */

export function GridToggle() {
	const [selectedBoxed, setSelectedBoxes] = useState<number[]>([]);

	useEffect(() => {
		let timeout: NodeJS.Timeout[];
		if (selectedBoxed.length === 8) {
			timeout = selectedBoxed.map((val, index) => {
				return setTimeout(() => {
					setSelectedBoxes((curr) => curr.filter((num) => num !== val));
				}, 300 * (selectedBoxed.length - index));
			});
		}

		return () => {
			if (timeout && selectedBoxed.length === 0) {
				timeout.map((val) => {
					clearTimeout(val);
				});
			}
		};
	}, [selectedBoxed]);

	return (
		<div className='grid grid-cols-3 gap-3 w-max mx-auto py-5'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, index) => {
				function handleClick() {
					if (index === 4) return;
					setSelectedBoxes((curr) => [...curr, val]);
				}

				return (
					<button
						key={`${index}`}
						type='button'
						className={`w-10 h-10 border border-black border-solid ${selectedBoxed.includes(val) && 'bg-green-400'} ${
							index === 4 && 'invisible pointer-events-none'
						}`}
						onClick={handleClick}
					/>
				);
			})}
		</div>
	);
}
