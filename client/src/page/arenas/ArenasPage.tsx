import React from 'react';
import './ArenasPage.css';
import { RootState } from '@reduxjs/toolkit/query';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import {  ArenaWithMetroStation } from '../../entities/arena/types/ArenaType';
import ArenaAddForm from '../../entities/arena/ui/ArenaAddForm';
import { useAppSelector } from '../../app/provider/store/store';

type ArenasPageProps = {};

const ArenasPage = ({}: ArenasPageProps): JSX.Element => {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);

  return (
    <>
      <div className="ArenasPage">Площадки</div>
      <div>{arenas && arenas.map((arena: ArenaWithMetroStation) => <ArenaItem arena={arena} key = {arena.id}/>)}</div>
      <span>{errors}</span>
		<button>Добавить площадку</button>
		<ArenaAddForm/>
    </>
  );
};

export default ArenasPage;
