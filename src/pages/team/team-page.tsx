
import PageTitle from "../../components/page-title/page-title"
import TeamList from '../../components/team-list/team-list';

const data = [
    {
        key: '1',
        name: 'John Brown',
        tel: '32123 1231 23',
        email: 'test12@asd.rjd',
        tags: ['Управляющий'],
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '4221 123121 11',
        email: 'test3@rets.xk',
        tags: ['Врач'],
    },
    {
        key: '3',
        name: 'Joe Black',
        tel: '3221 12311 1231',
        email: 'test3@rets.xk',
        tags: ['Врач'],
    },
];

const TeamPage = () => {
    return (
        <>
            <PageTitle title="Сотрудники" />
            <TeamList data={data} />
        </>
    )
}

export default TeamPage;