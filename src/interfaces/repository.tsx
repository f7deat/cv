export interface IRepository {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string
}

export enum ELanguage {
    HTML = 'html',
    JAVASCRIPT = 'JavaScript',
    TYPESCRIPT = 'TypeScript'
}