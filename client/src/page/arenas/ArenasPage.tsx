import React from 'react';
import './ArenasPage.css';
import type { RootState } from '@reduxjs/toolkit/query';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import type { ArenaWithMetroStation } from '../../entities/arena/types/ArenaType';
import { useAppSelector } from '../../app/provider/store/store';

function ArenasPage(): JSX.Element {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);

  return (
    <>
      <div className="ArenasPage"></div>
      <div>
        {arenas &&
          arenas.map((arena: ArenaWithMetroStation) => (
            <ArenaItem arena={arena} key={arena.id} />
          ))}
      </div>
      <span>{errors}</span>
    </>
  );
}

export default ArenasPage;
