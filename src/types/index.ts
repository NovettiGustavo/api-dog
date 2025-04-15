export interface Dog { //É o que a API tem na listagem geral
    
    id: string;
    type: string;
    attributes: {
      name: string;
      description: string;
      hypoallergenic: boolean;
      life: {
        min: number;
        max: number;
      };
      male_weight: {
        min: number;
        max: number;
      };
  
      female_weight: {
        min: number;
        max: number;
      };
    };

  }

  export interface DogProps{
    dogs: Dog[];
  }

  export interface DogDescription{//É o que a API te dá quando você busca UM dog específico por ID
    id: string;
    type: string;
    attributes: {
        name: string;
        life: {
            min: number;
            max: number;
        },
        male_weight:{
            min: number;
            max: number;
        },
        female_weight:{
            min: number;
            max: number;
        },
        description: string;
        hypoallergenic: boolean;
    }
  }

  export interface DogResponseProps{//É o formato da resposta da API quando você busca 1 dog específico
    data: DogDescription;
    links:{
        self:string;
    }
}

export interface DogCardProps{
    dog: DogDescription
}

