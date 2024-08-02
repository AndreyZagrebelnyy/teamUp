import React from 'react';
import './ArenasPage.css';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import { Arena } from '../../entities/arena/types/ArenaType';

type ArenasPageProps = {};

const ArenasPage = ({}: ArenasPageProps): JSX.Element => {
  const { arenas, errors } = useSelector((store: RootState) => store.arenas);

  return (
    <>
      <div className="ArenasPage">Площадки</div>
      <div>{arenas && arenas.map((arena: Arena) => <ArenaItem arena={arena} />)}</div>
		<span>{errors}</span>
    </>
  );
};

export default ArenasPage;
