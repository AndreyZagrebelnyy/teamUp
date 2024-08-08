import React, { useState, useEffect } from 'react';
import './ArenasPage.css';
import { YMaps, Map, Placemark, RouteButton } from '@pbe/react-yandex-maps';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import type { ArenaWithMetroStation } from '../../entities/arena/types/ArenaType';
import type { RootState } from '../../app/provider/store/store';
import { useAppDispatch, useAppSelector } from '../../app/provider/store/store';
import MetroFilter from '../../components/MetroFilter';
import { getAllArenas } from '../../entities/arena/ArenaSlice';

function ArenasPage(): JSX.Element {
  const { arenas, errors } = useAppSelector((store: RootState) => store.arenas);
  const [selectedStation, setSelectedStation] = useState<string>('');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [routeEnd, setRouteEnd] = useState<[number, number] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const dispatch = useAppDispatch();
  // Получение уникальных названий станций метро
  const metroStations = Array.from(new Set(arenas?.map((arena) => arena.MetroStation?.title)));

  // Фильтрация арен по выбранной станции метро
  const filteredArenas = selectedStation
    ? arenas.filter((arena) => arena.MetroStation.title === selectedStation)
    : arenas;

  useEffect(() => {
    // Получение текущего местоположения пользователя
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error obtaining geolocation:', error);
        },
      );
    }
    void dispatch(getAllArenas());
  }, []);

  const handlePlacemarkClick = (coords: [number, number]) => {
    setRouteEnd(coords);
  };

  return (
    <div className="ArenasPage">
      <h1>Площадки</h1>
      <MetroFilter
        stations={metroStations}
        selectedStation={selectedStation}
        onSelectStation={setSelectedStation}
      />
      <button onClick={() => setShowMap(!showMap)}>
        {showMap ? 'Скрыть карту' : 'Показать карту'}
      </button>
      {showMap && (
        <YMaps query={{ apikey: 'b6f643cd-22f8-498c-813a-69562572f092' }}>
          <Map defaultState={{ center: [59.9311, 30.3609], zoom: 10 }} width="100%" height="500px">
            {userLocation && (
              <Placemark
                geometry={userLocation}
                properties={{ balloonContent: 'Ваше местоположение' }}
                options={{ preset: 'islands#geolocationIcon' }}
              />
            )}
            {filteredArenas.map((arena) => (
              <Placemark
                key={arena.id}
                geometry={[arena.coordX, arena.coordY]}
                properties={{
                  balloonContent: arena.title,
                  hintContent: arena.description,
                }}
                onClick={() => handlePlacemarkClick([arena.coordX, arena.coordY])}
              />
            ))}
            {routeEnd && userLocation && (
              <RouteButton
                options={{ float: 'right' }}
                instanceRef={(ref) => {
                  if (ref) {
                    ref.routePanel.state.set({
                      from: userLocation,
                      to: routeEnd,
                    });
                  }
                }}
              />
            )}
          </Map>
        </YMaps>
      )}
      <div className="arena-list">
        {filteredArenas.map((arena) => (
          <ArenaItem key={arena.id} arena={arena} />
        ))}
      </div>
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
}

export default ArenasPage;
