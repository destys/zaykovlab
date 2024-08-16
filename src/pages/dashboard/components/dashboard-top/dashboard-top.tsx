import DashboardTopItem from "./dashboard-top-item"

const data = [
    {
        id: 2,
        count: 4,
        title: "Новых",
    },
    {
        id: 3,
        count: 5,
        title: "В работе",
    },
    {
        id: 4,
        count: 9,
        title: "Ожидает отправки",
    },
    {
        id: 5,
        count: 1,
        title: "Отправлено",
    },
]

const DashboardTop = () => {
    const total = data.reduce((acc, item) => acc + item.count, 0);

    return (
        <div className="lg:col-span-3 grid xs:grid-cols-3 md:grid-cols-5 gap-2">
            <div className="flex flex-col px-2 py-3 rounded bg-blue-50 font-lg">
                Всего в работе
                <div className="flex items-center gap-3 mt-auto">
                    <div className="font-bold text-2xl">
                        {total}
                    </div>
                </div>
            </div>
            {data.map((item) => (
                <DashboardTopItem key={item.id} item={item} total={total} />
            ))}
        </div>
    )
}

export default DashboardTop