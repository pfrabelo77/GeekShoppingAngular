export class Cliente {

	constructor(
		public id?: number,
		public nome?: string,
        public email?: string,
        public cpf?: string,
        public telefone?: string,
        public dataNascimento?: Date,        
        public creditoAprovado?: number,   
		public ativo?: boolean,) {}
}
