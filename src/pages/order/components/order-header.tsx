import { Button, Tooltip } from "antd";
import { MedicineBoxFilled, HomeFilled, CalendarFilled, ArrowLeftOutlined } from "@ant-design/icons";
import OrderActions from "../../../components/order-actions/order-actions"
import { formatDate } from "../../../utils/format-date";
import { useNavigate } from "react-router-dom";

const OrderHeader = ({ id }: { id: string | undefined }) => {
    const navigate = useNavigate();
    return (
        <div className="mb-10 p-2 border rounded flex justify-between gap-6 items-center">
            <Button onClick={() => navigate(-1)}>
                <ArrowLeftOutlined />
            </Button>
            <div className="mr-auto">
                <h1 className="text-2xl font-semibold mb-4">
                    Заказ №{id}
                </h1>
                <div className="flex gap-3 text-gray-400 uppercase">
                    <div className="flex gap-2">
                        <Tooltip placement="bottomLeft" title="Врач" arrow={false}>
                            <MedicineBoxFilled />
                        </Tooltip>
                        Иван Петров 11
                    </div>
                    <div className="flex gap-2">
                        <Tooltip placement="bottomLeft" title="Клиника" arrow={false}>
                            <HomeFilled />
                        </Tooltip>
                        Stamus Dent
                    </div>
                    <div className="flex gap-2">
                        <Tooltip placement="bottomLeft" title="Дата создания" arrow={false}>
                            <CalendarFilled />
                        </Tooltip>
                        {formatDate(new Date())}
                    </div>
                </div>
            </div>
            <OrderActions />
        </div>
    )
}

export default OrderHeader