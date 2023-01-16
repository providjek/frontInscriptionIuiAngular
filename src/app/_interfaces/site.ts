import {IZone} from "./izone";
import {ICentre} from "./icentre";

export interface ISite {
  id: number,
  zone_id: number,
  nom: string,
  description: string,
  image: string,
  pays: string,
  zone :  IZone,
  centre : ICentre[]
}
