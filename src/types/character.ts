import {
  ClassType, GenderType, RaceType, SideType,
} from './global';

export interface ICharacter {
  name: string
  side: SideType
  race: RaceType
  class: ClassType
  gender: GenderType
}
