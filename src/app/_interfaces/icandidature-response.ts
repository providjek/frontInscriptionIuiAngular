import {IUtilisateurResponseModel} from "./utilisateur-response-model";

export interface ICandidatureResponse {
  langue: string,
  email_pere: string,
  email_mere: string,
  statut: string,
  code_examen: number
  cycle: string,
  compte: IUtilisateurResponseModel,
  nationalite: string,
  genre: string,
  tel_pere: string,
  date_naissance: string,
  tel_mere: string,
  image: string,
  formation2: string,
  formation3: string,
  paiement: string,
  formation1: string,
  reference_paiement: string,
  telephone_paiement: string,
  dernier_Etablissement: string,
  lieu_de_naissance: string,
  ville : string,
  nombre_choix : number,
  centre : string
  candidatureActif : boolean
}
