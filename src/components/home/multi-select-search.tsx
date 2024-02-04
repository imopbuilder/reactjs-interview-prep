'use client';

import { X } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';

export function MultiSelectSearch() {
	const [input, setInput] = useState('');
	const [select, setSelect] = useState<string[]>([]);

	function handleKeydown(e: KeyboardEvent<HTMLInputElement>) {
		const { key } = e;
		if (key === 'Enter') {
			setSelect((curr) => [...curr, input.trim()]);
			setInput('');
			return;
		}

		if (key === 'Backspace' && input.length === 0) {
			setSelect((curr) => curr.slice(0, -1));
			return;
		}
	}

	function handleRemove(index: number) {
		setSelect((curr) => curr.filter((_, idx) => idx !== index));
	}

	return (
		<div className='border-2 border-violet-500 rounded-md'>
			<div className='w-full p-1'>
				{select.map((val, index) => (
					<span key={`${index}`} className='inline-flex items-center justify-center bg-violet-300 gap-2 rounded-md p-1 mr-2 last-of-type:mr-0'>
						{val}{' '}
						<button type='button' onClick={() => handleRemove(index)}>
							<X size={14} className='bg-slate-300 rounded-full' />
						</button>
					</span>
				))}
				<input
					className='h-9 mt-1 inline-block outline-none px-2 py-1 bg-transparent w-fit border border-pink-300 rounded-sm ml-1'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeydown}
					type='text'
					autoComplete='off'
				/>
			</div>
		</div>
	);
}
