export interface Player {
    id: string,
    name:string,
    position:string[],
    dob: Date,
    college: string,
    born:string,
    shootinghand: 'left'| 'right'|'both',
    height:string,
    weight:string,
    img:string
};
export type PlayerTable =  {
    name:string,
    careerlength:number,
    height:string,
    weight:string,
    dob:Date,
    college:string

}