export interface Imodal {
    message : string
}

export interface IreqHead {
    "ContentType": string;
    Accept: string;
    Authorization?: string;
}

export interface IauthContext  {
    user: boolean ;
    setUser : React.Dispatch<React.SetStateAction<boolean>>
};


export type ReactChildBeh =  {
    title: string,
    name : string,
    children: JSX.Element,
    style? : object

}


export interface IshopCard {
    title : string,
    price_one : string,
    price_two : string,
    author : string,
    desc : string
}

export interface cityOptionType {
    title: string;
    id: number;
}
export interface cityType {
    title : string,
    id : number
}

