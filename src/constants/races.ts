import {
  RaceType, SideType,
} from 'types/global';

export const RACES: {
  id: number,
  name: RaceType,
  side: SideType,
}[] = [{
  id: 1,
  name: 'human',
  side: 'alliance',
}, {
  id: 2,
  name: 'orc',
  side: 'horde',
}, {
  id: 3,
  name: 'dwarf',
  side: 'alliance',
}, {
  id: 4,
  name: 'night-elf',
  side: 'alliance',
}, {
  id: 5,
  name: 'undead',
  side: 'horde',
}, {
  id: 6,
  name: 'tauren',
  side: 'horde',
}, {
  id: 7,
  name: 'gnome',
  side: 'alliance',
}, {
  id: 8,
  name: 'troll',
  side: 'horde',
}, {
  id: 10,
  name: 'blood-elf',
  side: 'horde',
}, {
  id: 11,
  name: 'draenei',
  side: 'alliance',
}];

export const ALLIANCE_RACES = RACES.filter((race) => race.side === 'alliance');
export const HORDE_RACES = RACES.filter((race) => race.side === 'horde');

export const ALLIANCE_RACE_NAMES = ALLIANCE_RACES.map((race) => race.name);
export const HORDE_RACE_NAMES = HORDE_RACES.map((race) => race.name);
