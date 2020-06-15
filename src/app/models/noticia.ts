export class Noticia {
   ID:number;
   SEO:string;
   tit:string;
   con:string;
   img:string;

   constructor(ID?:number, SEO?:string, tit?:string, con?:string, img?:string){
       this.ID = ID;
       this.SEO = SEO;
       this.con = con;
       this.tit = tit;
       this.img = img;


   }

}

