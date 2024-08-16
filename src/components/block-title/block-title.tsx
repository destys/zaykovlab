const BlockTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h3 className={`relative mb-6 font-medium text-lg pl-4 before:absolute before:top-0 before:left-0 before:bg-blue-500 before:w-1 before:h-full ${className    }`}>
            {title}
        </h3>
    )
}

export default BlockTitle