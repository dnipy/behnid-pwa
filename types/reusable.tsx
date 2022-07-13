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
    desc : string,
    pic : string | null
}

export interface cityOptionType {
    title: string;
    id: number;
}
export interface cityType {
    title : string,
    id : number
}


export interface ResivedProps {
    phone : string,
    userName : string,
    user_type_label : string
}
  
export interface IauthContextProps  {
    children: React.ReactNode;
};

export interface IapiGet {
    url : string,
}