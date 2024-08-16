import ReactECharts from 'echarts-for-react';

const DashboardOrdersHistory = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    };
    return (
        <div className="flex justify-center p-3 bg-blue-50 rounded max-w-full">
            <ReactECharts option={option} className='flex-auto' />
        </div>
    )
}

export default DashboardOrdersHistory