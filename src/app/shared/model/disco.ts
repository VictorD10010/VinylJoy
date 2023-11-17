export class Disco {

    constructor(public titulo?: string, public barCode?: string, public banda?: string, public genero?: string, public gravadora?: string) {
        this.titulo = titulo;
        this.barCode = barCode;
        this.banda = banda;
        this.genero = genero;
        this.gravadora = gravadora;
    }
    public getTitulo(){
        return this.titulo;
    }
    public getBarCode(){
        return this.barCode;
    }
    public getBanda(){
        return this.banda;
    }
    public getGenero(){
        return this.genero;
    }
    public getGravadora(){
        return this.gravadora;

    }
    public setTitulo(titulo: string){
         this.titulo = titulo;
    }
    public setBarCode(barCode: string){
         this.barCode = barCode;
    }
    public setBanda(banda: string){
         this.banda = banda;
    }
    public setGenero(genero: string){
        this.genero = genero;
    }
    public setGravadora(gravadora: string){
        this.gravadora = gravadora;

    }
    toString(): string{
        return `Título: ${this.titulo}
       / Banda: ${this.banda}
       / Gênero: ${this.genero}
       / Gravadora: ${this.gravadora} `;
    }
}