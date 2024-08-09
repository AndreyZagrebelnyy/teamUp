import React from 'react';
import { Select } from '@mantine/core';

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
  // Создаем массив опций для Select
  const options = stations
    .filter((el) => el !== undefined)
    .map((station) => ({
      value: station,
      label: station,
    }));

  console.log(stations, selectedStation, onSelectStation, options);

  return (
    <div className="metro-filter">
      <label htmlFor="metro-select">Фильтр по станции метро:</label>
      <Select
        id="metro-select"
        value={selectedStation}
        onChange={(value) => onSelectStation(value || '')}
        data={options}
        placeholder="Выберите станцию"
        searchable
        itemComponent={(props) => {
          const { value, label, ...rest } = props;
          // Возвращаем элемент списка с цветной точкой
          return (
            <div {...rest} style={{ display: 'flex', alignItems: 'center'}}>
              <span
                style={{
                  display: 'inline-block',
                  width: '15px',
                  height: '15px',
                  backgroundColor: '#00A0E3', // Пример цвета линии метро
                  borderRadius: '50%',
                  marginRight: '8px',
                }}
              />
              {label}
            </div>
          );
        }}
      />
    </div>
  );
}

export default MetroFilter;
