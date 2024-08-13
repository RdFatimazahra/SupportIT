export enum EtatPanne {

    'SIGNALEE',
    'EN_COURS',
    'RESOLUE',
    'NON_REPARABLE'

}


export interface Panne {
    idPanne?: number;
    description : string;
    etatPanne : EtatPanne;
}
