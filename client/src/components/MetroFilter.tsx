import React from 'react';

type MetroFilterProps = {
  stations: string[];
  selectedStation: string;
  onSelectStation: (station: string) => void;
};

function MetroFilter({
  stations,
  selectedStation,
  onSelectStation,
}: MetroFilterProps): JSX.Element {
  return (
    <div className="metro-filter">
      <label htmlFor="metro-select">Фильтр по станции метро:</label>
      <select
        id="metro-select"
        value={selectedStation}
        onChange={(e) => onSelectStation(e.target.value)}
      >
        <option value="">Все станции</option>
        {stations.map((station, id) => (
          <option key={id} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MetroFilter;
