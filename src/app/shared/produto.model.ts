import { Byte } from "@angular/compiler/src/util";
import { Erro } from "./erro.model";
import { ImageUpload } from "./imageupload.model";

export class Produto {
    id: string;
    name: string;
    price?: number;
    description: string;
    categoryName: string;
    imageUrl: string;
    imageUpload?: ImageUpload | null = null;  
    erros?: Erro[] = [];
}
