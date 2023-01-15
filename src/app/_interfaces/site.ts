import {IZone} from "./izone";

export interface ISite {
  id: number,
  zone_id: number,
  nom: string,
  description: string,
  image: string,
  pays: string,
  zone :  IZone
}
