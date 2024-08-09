import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, RouteButton } from '@pbe/react-yandex-maps';
import { DashboardSquare01Icon, MapingIcon } from 'hugeicons-react';
import ArenaItem from '../../entities/arena/ui/ArenaItem';
import type { RootState } from '../../app/provider/store/store';
import { useAppDispatch, useAppSelector } from '../../app/provider/store/store';
import MetroFilter from '../../components/MetroFilter';
import { getAllArenas } from '../../entities/arena/ArenaSlice';
import './ArenasPage.css';

function ArenasPage(): JSX.Element {
  const arenas = useAppSelector((store: RootState) => store.arenas.arenas);
  const [selectedStation, setSelectedStation] = useState<string>('');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [routeEnd, setRouteEnd] = useState<[number, number] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const dispatch = useAppDispatch();

  // Получение уникальных названий станций метро
  const metroStations = Array.from(
    new Set(arenas?.map((arena) => arena.MetroStation?.title) || []),
  );

  // Фильтрация арен по выбранной станции метро
  const filteredArenas = selectedStation
    ? arenas.filter((arena) => arena.MetroStation?.title === selectedStation)
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
  }, [dispatch]);

  const handlePlacemarkClick = (coords: [number, number]) => {
    setRouteEnd(coords);
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  const handleShowDashboard = () => {
    setShowMap(false);
  };

  return (
    <div className="ArenasPage">
      <h1>Площадки</h1>
      <MetroFilter
        stations={metroStations}
        selectedStation={selectedStation}
        onSelectStation={setSelectedStation}
      />
      <div className="icon-container">
        <MapingIcon
          size="50px"
          className={`icon ${showMap ? 'active' : ''}`}
          onClick={handleShowMap}
          disabled={showMap}
        />
        <DashboardSquare01Icon
          size="50px"
          className={`icon ${!showMap ? 'active' : ''}`}
          onClick={handleShowDashboard}
          disabled={!showMap}
        />
      </div>
      {showMap ? (
        <YMaps query={{ apikey: 'b6f643cd-22f8-498c-813a-69562572f092' }}>
          <Map defaultState={{ center: [59.9311, 30.3609], zoom: 12 }} width="60%" height="500px">
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
      ) : (
        <div className="arena-list">
          {filteredArenas.map((arena) => (
            <ArenaItem key={arena.id} arena={arena} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArenasPage;
