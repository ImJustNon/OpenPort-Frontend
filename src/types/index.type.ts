export type PortfolioSource = {
    cover: string;
    inner: string[];
}
export type PortfolioResult = {
    interview: boolean;
    pass: boolean;
}
export interface PortfolioData {
    id: string;
    name: string;
    description: string;
    sources: PortfolioSource;
    tags: string[];
    university: string;
    faculty: string;
    branch: string[];
    program: string;
    author: string;
    language: string;
    pages: number;
    type: string;
    categories: string[];
    results: PortfolioResult;
}