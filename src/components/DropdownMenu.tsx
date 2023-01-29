import { nanoid } from 'nanoid';

export default function DropdownMenu() {
	return (
		<div className="absolute right-0 mt-12 py-2 px-3 w-48 bg-white rounded-md shadow-xl z-20 mr-5">
			<div className="py-2">
				<p className="text-xs text-secondary-text">File Type</p>
			</div>
			<hr />
			<div className="mt-3">
				{['pdf', 'excel', 'word', 'png', 'jpeg'].map((option) => (
					<div
						key={nanoid()}
						className="px-4 py-2 text-sm capitalize text-gray-700 hover:bg-light-blue"
					>
						<label htmlFor={`filter-option-${option}`} className="flex items-center">
							<input type="checkbox" id={`filter-option-${option}`} className="-ml-3" />
							<span className="ml-3">{option}</span>
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
