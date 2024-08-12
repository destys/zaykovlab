interface IOrderType {
    type: string
}

const OrderType: React.FC<IOrderType> = ({ type }) => {
    return (
        <div className="p-1 rounded bg-blue-50 text-blue-400 font-medium text-center">{type}</div>
    )
}

export default OrderType