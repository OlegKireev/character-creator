import { IRace, RACES } from 'constants/races';
import { RaceType } from 'types/global';

export const useRaces = () => {
  const names = RACES.map((race) => race.name);
  const raceMap: { [key in RaceType]?: IRace } = RACES.reduce((acc, cur) => ({
    ...acc,
    [cur.name]: cur,
  }), {});
  const allianceRaces = RACES.filter((race) => race.side === 'alliance');
  const hordeRaces = RACES.filter((race) => race.side === 'horde');
  const allianceRaceNames = allianceRaces.map((race) => race.name);
  const hordeRaceNames = hordeRaces.map((race) => race.name);

  return {
    races: RACES,
    raceMap,
    names,
    allianceRaces,
    hordeRaces,
    allianceRaceNames,
    hordeRaceNames,
  };
};
