import { Tooltip } from "antd";
import ReactECharts from 'echarts-for-react';

interface IDashboardTopItem {
    item: {
        id: number;
        count: number;
        title: string;
    };
    total: number;
}
const DashboardTopItem: React.FC<IDashboardTopItem> = ({ item, total }) => {
    const option = {
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,

                silent: true,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: (params: { dataIndex: number }) => {
                        return params.dataIndex === 0 ? '#3b82f6' : '#d1d5db';
                    }
                },
                data: [
                    { value: item.count },
                    { value: total - item.count }
                ]
            }
        ]
    };

    return (
        <Tooltip placement="top" title={`${((item.count / total) * 100).toFixed(2)}%`} >
            <div className="flex flex-col px-2 py-3 rounded bg-blue-50 font-lg">
                {item.title}
                <div className="flex items-center gap-3 mt-auto">
                    <div>
                        <ReactECharts option={option} className="!w-11 !h-11" />
                    </div>
                    <div className="font-bold text-2xl">
                        {item.count}
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export default DashboardTopItem