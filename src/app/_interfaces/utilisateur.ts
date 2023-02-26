export interface IUtilisateur {
  name: string,
  prenom: string,
  password: string,
  email: string,
  telephone?: number,
  role: string,
  id_disponibilite: number
}
