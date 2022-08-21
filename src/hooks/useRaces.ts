import { RACES } from 'constants/races';

export const useRaces = () => {
  const names = RACES.map((race) => race.name);
  const allianceRaces = RACES.filter((race) => race.side === 'alliance');
  const hordeRaces = RACES.filter((race) => race.side === 'horde');
  const allianceRaceNames = allianceRaces.map((race) => race.name);
  const hordeRaceNames = hordeRaces.map((race) => race.name);

  return {
    races: RACES,
    names,
    allianceRaces,
    hordeRaces,
    allianceRaceNames,
    hordeRaceNames,
  };
};
