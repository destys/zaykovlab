interface IPageTitle {
    title: string;
}

const PageTitle: React.FC<IPageTitle> = ({ title }) => {
    return (
        <h1 className="mb-6 text-2xl font-bold">{title}</h1>
    )
}

export default PageTitle