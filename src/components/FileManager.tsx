import { SlOptions } from 'react-icons/sl';
import { nanoid } from 'nanoid';
import { TbFileUpload } from 'react-icons/tb';

type FileManagerProps = {
	titleText: string;
	images: string[];
};

export default function FileManager({ titleText, images }: FileManagerProps) {
	return (
		<div className="mt-3 mb-10">
			<div>
				<p className="font-bold text-secondary-text">{titleText}</p>
			</div>
			<div className="grid gap-10 grid-cols-4 mt-4">
				{images.map((image) => (
					<div className="w-auto mx-auto" key={nanoid()}>
						<div>
							<img src={image} />
						</div>
						<div className="flex justify-between mt-5">
							<div>
								<p className="text-lg font-bold">File Name Brief.pdf</p>
								<p className="text-secondary-text text-sm">File Size: 2.4mb</p>
							</div>
							<div className="flex items-center">
								<SlOptions />
							</div>
						</div>
					</div>
				))}
				<div className="w-auto">
					<div className="flex items-center justify-center rounded-xl h-full bg-light-blue flex-1">
						<button className="flex items-center shadow bg-button-blue hover:button-blue rounded-md focus:shadow-outline focus:outline-none text-white px-5 py-2 ml-3">
							<span className="text-xs">Upload File</span>{' '}
							<TbFileUpload className="font-semibold ml-3 text-xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
