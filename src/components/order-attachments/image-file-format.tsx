const ImageFileFormat = ({ title }: { title: string }) => {
    return (
        <div className="relative">
            <img src="/file.png" alt="file" width={50} height={100} />
            <span className="absolute right-2 bottom-2.5 text-white w-full text-right">{title}</span>
        </div>
    )
}

export default ImageFileFormat