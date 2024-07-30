class Personagem {
    // O construtor da classe 'Personagem' aceita dois parâmetros: nome e vida
    constructor(nome, vida) {
      this.nome = nome; // Atribui o parâmetro 'nome' à propriedade 'nome' do objeto
      this.vida = vida; // Atribui o parâmetro 'vida' à propriedade 'vida' do objeto
    }
  
    // Método 'saudar' retorna uma saudação usando o nome do personagem
    saudar() {
      return `Olá, eu sou ${this.nome}.`; // Retorna uma string com a saudação
    }
  }
  
  // Definimos a subclasse 'Heroi' que herda da classe 'Personagem'
  class Heroi extends Personagem {
    // O construtor da classe 'Heroi' aceita três parâmetros: nome, vida e forca
    constructor(nome, vida, forca) {
      super(nome, vida); // Chama o construtor da classe base 'Personagem'
      this.forca = forca; // Atribui o parâmetro 'forca' à propriedade 'forca' do objeto
    }
  
    // Método 'atacar' retorna uma string descrevendo o ataque do herói
    atacar() {
      return `${this.nome} ataca com força ${this.forca}.`; // Retorna uma string com a descrição do ataque
    }
  }
  
  // Definimos a subclasse 'Vilao' que herda da classe 'Personagem'
  class Vilao extends Personagem {
    // O construtor da classe 'Vilao' aceita três parâmetros: nome, vida e maldade
    constructor(nome, vida, maldade) {
      super(nome, vida); // Chama o construtor da classe base 'Personagem'
      this.maldade = maldade; // Atribui o parâmetro 'maldade' à propriedade 'maldade' do objeto
    }
  
    // Método 'ameaçar' retorna uma string descrevendo a ameaça do vilão
    ameaçar() {
      return `${this.nome} ameaça com maldade ${this.maldade}.`; // Retorna uma string com a descrição da ameaça
    }
  }
  
  // Exportamos as classes 'Heroi' e 'Vilao' para serem utilizadas em outros arquivos
  module.exports = { Heroi, Vilao }; // Exporta as classes usando 'module.exports'