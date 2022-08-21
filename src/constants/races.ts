import {
  ClassType,
  RaceType, SideType,
} from 'types/global';

export interface IRace {
  id: number,
  name: RaceType,
  side: SideType,
  availableClasses: ClassType[]
}

export const RACES: IRace[] = [{
  id: 1,
  name: 'human',
  side: 'alliance',
  availableClasses: ['warrior', 'paladin', 'rogue', 'priest', 'mage', 'warlock'],
}, {
  id: 2,
  name: 'orc',
  side: 'horde',
  availableClasses: ['warrior', 'hunter', 'rogue', 'shaman', 'warlock'],
}, {
  id: 3,
  name: 'dwarf',
  side: 'alliance',
  availableClasses: ['warrior', 'paladin', 'hunter', 'rogue', 'priest'],
}, {
  id: 4,
  name: 'night-elf',
  side: 'alliance',
  availableClasses: ['warrior', 'hunter', 'rogue', 'priest', 'druid'],
}, {
  id: 5,
  name: 'undead',
  side: 'horde',
  availableClasses: ['warrior', 'rogue', 'priest', 'mage', 'warlock'],
}, {
  id: 6,
  name: 'tauren',
  side: 'horde',
  availableClasses: ['warrior', 'hunter', 'shaman', 'druid'],
}, {
  id: 7,
  name: 'gnome',
  side: 'alliance',
  availableClasses: ['warrior', 'rogue', 'mage', 'warlock'],
}, {
  id: 8,
  name: 'troll',
  side: 'horde',
  availableClasses: ['warrior', 'hunter', 'rogue', 'priest', 'shaman', 'mage'],
}, {
  id: 10,
  name: 'blood-elf',
  side: 'horde',
  availableClasses: ['paladin', 'hunter', 'rogue', 'priest', 'mage', 'warlock'],
}, {
  id: 11,
  name: 'draenei',
  side: 'alliance',
  availableClasses: ['warrior', 'paladin', 'hunter', 'priest', 'shaman', 'mage'],
}];

export const ALLIANCE_RACES = RACES.filter((race) => race.side === 'alliance');
export const HORDE_RACES = RACES.filter((race) => race.side === 'horde');

export const ALLIANCE_RACE_NAMES = ALLIANCE_RACES.map((race) => race.name);
export const HORDE_RACE_NAMES = HORDE_RACES.map((race) => race.name);
