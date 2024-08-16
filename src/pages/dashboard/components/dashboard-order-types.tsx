import ReactECharts from 'echarts-for-react';

const DashboardOrderTypes = () => {
    const option = {
        title: {
            text: 'Типы заказов',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            top: '90%',
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Ортодонтия' },
                    { value: 735, name: 'Ортопедия' },
                ],
            }
        ]
    };
    return (
        <div className="flex justify-center p-3 bg-blue-50 rounded max-w-full">
            <ReactECharts option={option} className='flex-auto' />
        </div>
    )
}

export default DashboardOrderTypes