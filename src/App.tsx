import DashboardBody from './components/DashboardBody'
import Sidebar from './components/Sidebar'

function App() {
  return (
		<div id='view' className='h-full w-screen flex flex-row'>
      <Sidebar />
      <div className='flex-1'>
        <DashboardBody />
      </div>
		</div>
  )
}

export default App
