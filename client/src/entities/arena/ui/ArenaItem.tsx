import React from 'react';
import './ArenaItem.css';
import { Arena } from '../types/ArenaType';

type ArenaItemProps = {
  arena: Arena;
};

const ArenaItem = ({arena}: ArenaItemProps): JSX.Element => {


  return (
  <>
  <div>{arena.title}</div>
  <div>{arena.description}</div>
  <div>{`Адрес: г. ${arena.city}, ул. ${arena.street}, ${arena.building}`}</div>
  <div>{`Ст. метро: ${arena.MetroStation.title}`}</div>
  </>
  );
};

export default ArenaItem;
