import React, { useEffect, useState } from "react";
import {LightenDarkenColor} from '../../resources/helper';
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



export const MapChart = (props) => {
    const colorScale = scaleLinear().domain([0, 500]).range(["#ffedea", "#ff5233"]);

    return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      
      {
        props.countries.length > 0 && (
        <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = props.countries.find(s => s.code === geo.properties.ISO_A2);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d.percentageNumber*100) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
        </ZoomableGroup>
      )}
    </ComposableMap>
  );
};

export default MapChart;
