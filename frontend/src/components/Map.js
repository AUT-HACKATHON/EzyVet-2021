import { XMapbox } from 'elements-x/dist/mapbox';
XMapbox.accessToken =
	'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';

const Map = ({ markers, zoom }) => {
	return (
		<div>
			<x-mapbox zoom={zoom}>
				{markers &&
					markers.map((marker, index) => (
						<x-marker
							id="marker"
							lnglat={`${marker.lng},${marker.lat}`}
							center
							key={index}
						>
							{marker.info}
						</x-marker>
					))}
			</x-mapbox>
		</div>
	);
};

export default Map;
