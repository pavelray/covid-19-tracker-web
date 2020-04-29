import React from "react";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";

import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup
} from "react-simple-maps";
import {generateFillColor,renderToolTipContent} from '../../resources/helper';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";




export const MapChart = (props) => {

    return (
      <>
      <ComposableMap projectionConfig={{rotate: [-10, 0, 0],scale: 180}} data-tip="">
      {
        props.countries.length > 0 && (
          <ZoomableGroup zoom={1} >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const d = props.countries.find(s => s.code === geo.properties.ISO_A2);
                  geo.confirmed = d? d.confirmed: 0;
                  geo.recovered = d ? d.recovered : 0;
                  geo.deaths = d? d.deaths:0;

                  return (
                    <Geography key={geo.rsmKey} geography={geo}
                      values={d?d.confirmed:0}
                      fill={d ? generateFillColor(d.confirmed) : "#f8f8ff"}
                      style={{hover: {fill: "#F53", outline: "none"}}}
                      onMouseEnter={(e) => {
                        const { NAME} = geo.properties;
                        props.setTooltipContent(renderToolTipContent(NAME, geo.confirmed, geo.recovered, geo.deaths));
                      }}
                      onMouseLeave={() => {
                        props.setTooltipContent(``);
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        )}

      </ComposableMap>
    </>
  );
};

export default MapChart;
