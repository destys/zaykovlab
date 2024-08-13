import DashboardOrderTypes from "./components/dashboard-order-types"
import DashboardOrdersHistory from "./components/dashboard-orders-history"
import DashboardTop from "./components/dashboard-top/dashboard-top"


const DashboardPage = () => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <DashboardTop />
            <div>
                <DashboardOrdersHistory />
            </div>
            <div>
                <DashboardOrderTypes />
            </div>
        </div>
    )
}

export default DashboardPage