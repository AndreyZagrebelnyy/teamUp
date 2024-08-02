import React from 'react';
import type { Sport } from '../types/sportTypes';

type sportItemProps = {
  sport: Sport;
};

function SportItem({ sport }: sportItemProps): JSX.Element {
  return (
    <div>
      <h1>{sport.title}</h1>
    </div>
  );
}

export default SportItem;
