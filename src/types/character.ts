import { Class, Gender, Race, Side } from "./global"

export interface ICharacter {
  name: string
  side: Side
  race: Race
  class: Class
  gender: Gender
};