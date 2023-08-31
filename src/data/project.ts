interface IProjectGroup {
    id: number;
    name: string;
    projects: IProject[];
}

interface IProject {
    id: number,
    name: string;
    description: string;
}

const Projects: IProjectGroup[] = [
    {
        id: 1,
        name: 'Niteco Vietnam Company Limited',
        projects: [
            {
                id: 1,
                name: 'Levande',
                description: 'Build web appliance subscription service'
            },
            {
                id: 2,
                name: 'Delaware',
                description: 'Build web cms for Extex Group'
            }
        ]
    },
    {
        id: 2,
        name: 'VNPT-IT',
        projects: [
            {
                id: 1,
                name: 'EZoZo',
                description: 'Build a restaurant management system is a type of point-of-sale (POS) software specifically designed for restaurants, bars, food trucks and others in the foodservice industry'
            }
        ]
    }
];

export default Projects