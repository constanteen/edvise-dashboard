import { useState } from 'react';
import { CiSearch, CiFilter } from 'react-icons/ci';
import FileManager from './FileManager';
import imageFile from '../assets/images/image-file.png';
import pdfFile from '../assets/images/pdf-file.png';
import wordFile from '../assets/images/word-file.png';
import abstractImage from '../assets/images/abstract-image.png';
import DropdownMenu from './DropdownMenu';

const privateImages = [pdfFile, imageFile, wordFile];
const sharedImages = [abstractImage, pdfFile, wordFile];

export default function DashboardBodyFiles() {
	const [showDropdownMenu, setShowDropdownMenu] = useState(false);
	return (
		<div>
			<div className="flex justify-end">
				<label className="relative text-gray-400 focus-within:text-gray-600 block">
					<CiSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />
					<input
						className="p-2 rounded-md bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
						placeholder="Search"
					/>
				</label>
				<button
					className="flex items-center shadow bg-button-blue hover:button-blue rounded-md focus:shadow-outline focus:outline-none text-white px-5 py-2 ml-3"
					onClick={() => setShowDropdownMenu(!showDropdownMenu)}
				>
					<span className="text-xs">Filter</span>{' '}
					<CiFilter className="font-semibold ml-3 text-xl" />
				</button>
				{showDropdownMenu && <DropdownMenu />}
			</div>
			<FileManager titleText="Private to teacher" images={privateImages} />
			<FileManager titleText="Shared with staff" images={sharedImages} />
		</div>
	);
}
