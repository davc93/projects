export interface Page {
    name: string;
    path: string;
}

export interface Route {

    name: string,
    path: string,
    private: boolean,
    onlyPublic: boolean
}
export interface Project {

    name: string,
    description: string,
    repoLink: string,
    envLink: string
    featureImage?: File,
}