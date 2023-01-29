import DashboardBodyFiles from './DashboardBodyFiles';
import DashboardBodyTop from './DashboardBodyTop';
import DashboardTabs from './DashboardTabs';

export default function DashboardBody() {
	return (
		<div className="bg-slate-50 p-10 ml-56">
			<DashboardBodyTop />
			<div className="my-5">
				<hr />
			</div>
			<DashboardTabs />
			<DashboardBodyFiles />
		</div>
	);
}
