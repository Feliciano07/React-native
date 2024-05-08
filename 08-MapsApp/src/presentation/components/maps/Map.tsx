import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/location';
import { FAB } from '../ui/FAB';
import { useEffect, useRef, useState } from 'react';
import { useLocationStore } from '../../store/location/useLocationStore';

interface Props {
    showUserLocation?: boolean;
    initialLocation: Location
}

export const Map = ({ showUserLocation = true, initialLocation }: Props) => {

    const mapRef = useRef<MapView>();
    const cameraLocation = useRef<Location>(initialLocation);
    const { getLocation, watchLocation, clearWatchLocation, lastKnownLocation, userLocationList } = useLocationStore();
    const [isFollowingUser, setIsFollowingUser] = useState(true);
    const [isShowingPolyline, setIsShowingPolyline] = useState(true);


    const moveCameraToLocation = (location: Location) => {
        if (!mapRef.current) return;

        mapRef.current.animateCamera({
            center: location
        })

    }

    const moveToCurrentLocation = async () => {
        const location = await getLocation();
        if (!location) return;
        moveCameraToLocation(location);
    }

    useEffect(() => {
        watchLocation();

        return () => {
            clearWatchLocation();
        }
    }, [])

    useEffect(() => {
        if (lastKnownLocation && isFollowingUser) {
            moveCameraToLocation(lastKnownLocation);
        }
    }, [lastKnownLocation, isFollowingUser])



    return (
        <>
            <MapView
                ref={(map) => mapRef.current = map!}
                showsUserLocation={showUserLocation}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                region={{
                    latitude: cameraLocation.current.latitude,
                    longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onTouchStart={() => setIsFollowingUser(false)}
            >
                {
                    isShowingPolyline &&
                    <Polyline
                        coordinates={userLocationList}
                        strokeColor='black'
                        strokeWidth={5}
                    />
                }

            </MapView>
            <FAB
                iconName={'compass-outline'}
                onPress={moveToCurrentLocation}
                style={{
                    bottom: 20,
                    right: 20
                }}
            />
            <FAB
                iconName={isFollowingUser ? 'walk-outline' : 'accessibility-outline'}
                onPress={() => setIsFollowingUser(!isFollowingUser)}
                style={{
                    bottom: 80,
                    right: 20
                }}
            />

            <FAB
                iconName={isShowingPolyline ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setIsShowingPolyline(!isShowingPolyline)}
                style={{
                    bottom: 140,
                    right: 20
                }}
            />
        </>
    )
}