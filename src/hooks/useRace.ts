import { RaceType, SideType } from 'types/global';
import { ALLIANCE_RACES, HORDE_RACES } from 'constants/races';

export function useSide(race: RaceType): SideType {
  if (ALLIANCE_RACES.some((allianceRace) => race === allianceRace.name)) {
    return 'alliance';
  }

  if (HORDE_RACES.some((hordeRace) => race === hordeRace.name)) {
    return 'horde';
  }

  return 'neutral';
}
