import React, { useState } from 'react';
import './ArenasPage.css';
import type { RootState } from '@reduxjs/toolkit/query';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import type { ArenaWithMetroStation } from '../../entities/arena/types/ArenaType';
import { useAppSelector } from '../../app/provider/store/store';
import MetroFilter from '../../components/MetroFilter';

function ArenasPage(): JSX.Element {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);
  const [selectedStation, setSelectedStation] = useState<string>('');

  const metroStations = Array.from(new Set(arenas.map((arena) => arena.MetroStation.title)));

  const filteredArenas = selectedStation
    ? arenas.filter((arena: ArenaWithMetroStation) => arena.MetroStation.title === selectedStation)
    : arenas;

  return (
    <>
      <div className="ArenasPage">Площадки</div>
      <MetroFilter
        stations={metroStations}
        selectedStation={selectedStation}
        onSelectStation={setSelectedStation}
      />
      <div className="arena-list">
        {filteredArenas &&
          filteredArenas.map((arena: ArenaWithMetroStation) => (
            <ArenaItem arena={arena} key={arena.id} />
          ))}
      </div>
      {errors && <span>{errors}</span>}
    </>
  );
}

export default ArenasPage;
