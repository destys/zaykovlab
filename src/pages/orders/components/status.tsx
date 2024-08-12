interface IStatus {
    status: string
}

const Status: React.FC<IStatus> = ({ status }) => {
    return (
        <div className="p-1 rounded bg-blue-200 text-blue-500 font-medium text-center">{status}</div>
    )
}

export default Status