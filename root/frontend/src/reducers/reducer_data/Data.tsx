

export interface Data{
    memes: Memes;
    isFetching: boolean;
    
}
export interface Memes{
 
    [webservice: string]: string[]
}
    

 

export interface Meme{
    id:number;
    webservice:string;
    memetype: string;
    thumb: string;
}

