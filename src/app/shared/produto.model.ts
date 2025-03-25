import { Erro } from "./erro.model";

export class Produto {
    id: string;
    name: string;
    price?: number;
    description: string;
    categoryName: string;
    imageUrl: string;
    erros?: Erro[] = [];
}
