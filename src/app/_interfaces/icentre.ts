import {ISite} from "./site";
import {IZone} from "./izone";

export interface ICentre {
  id: number,
  site_id: number,
  nom: string,
  contacts: string,
  ville: string,
  site: ISite,
  zone: IZone
}
