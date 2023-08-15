import SideBar from './SideBar'
import AdminPackageRequest from './AdminPackageRequest'

function PackageRequest() {
  return (
    <div style={{display:'flex'}}>
    <SideBar value="3"/>
    <AdminPackageRequest/>
    </div>
  )
}

export default PackageRequest