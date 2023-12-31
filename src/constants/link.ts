interface ILink {
    pathName: string;
    title: string;
}

export const NonAuthUserLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Tickets',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]

export const UserLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Tickets',
    },
    {
        "pathName": '/history',
        "title": 'History',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]

export const ProviderLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Tickets',
    },
    {
        "pathName": '/crowdfunding',
        "title": 'Crowdfunding',
    },{
        "pathName": '/create-crowdfunding',
        "title": 'Create Crowdfunding',
    },
    {
        "pathName": '/marketplace',
        "title": 'Marketplace',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]