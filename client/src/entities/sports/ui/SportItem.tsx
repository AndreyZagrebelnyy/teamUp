import React from 'react';
import type { Sport } from '../types/sportTypes';

type SportItemProps = {
  sport: Sport;
};

function SportItem({ sport }: SportItemProps): JSX.Element {
  return (
    <div>
      <h1>{sport.title}</h1>
    </div>
  );
}

export default SportItem;
