import Avatar2 from '../assets/images/Avatar2.png';

export default function DashboardTabs() {
	return (
		<div className="flex justify-between">
			<div className="flex items-center justify-center">
				<img src={Avatar2} />
				<div className="ml-3">
					<p className="font-bold text-2xl">Annabel Rohan</p>
					<p className="whitespace-nowrap text-gray-400 text-sm">SK298392</p>
				</div>
			</div>
			<div className="flex items-center justify-around">
				<div className="mx-4">
					<p className="border-b-4 pb-3 border-dark-blue text-black font-bold">
						Overview
					</p>
				</div>
				<div className="mx-4">
					<p className="pb-3 border-b-4 border-transparent text-gray-400 font-bold">
						Schedule
					</p>
				</div>
				<div className="mx-4">
					<p className="pb-3 border-b-4 border-transparent text-gray-400 font-bold">
						Attachment
					</p>
				</div>
				<div className="ml-4">
					<p className="pb-3 border-b-4 border-transparent text-gray-400 font-bold">
						Trends
					</p>
				</div>
			</div>
		</div>
	);
}
