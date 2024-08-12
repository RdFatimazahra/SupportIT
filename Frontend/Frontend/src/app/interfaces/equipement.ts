export enum EtatEquipement {
    EN_SERVICE = 'EN_SERVICE',
    HORS_SERVICE = 'HORS_SERVICE'
  }
  
  export interface Equipement {
    idEquipement?: number;
    nom: string;
    description: string;
    image:string;
    etat: EtatEquipement;
  }