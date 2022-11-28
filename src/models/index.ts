export interface Service {

    name:string,
    path:string,
    description:any,
    price:number,
    discount:number
}



export interface Route {

    name: string,
    path: string,
    private: boolean,
    onlyPublic: boolean
}
export interface ProjectDto {

    name: string,
    description: string,
    repoLink: string,
    envLink: string
    featureImage?: File,
}
export interface Project {

    name: string,
    description: string,
    repoLink: string,
    envLink: string
    featureImage?: string,
    techs:Tech[]
}
export interface Tech {
    id:string,
    name: string
}