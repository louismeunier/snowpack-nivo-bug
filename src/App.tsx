import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { NetworkCanvas } from "@nivo/network";
import { data } from "./data";

interface AppProps {}

function App({}: AppProps) {
  return (
    <NetworkCanvas
      height={1000}
      width={1000}
      nodes={data.nodes}
      links={data.links}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      repulsivity={4}
      iterations={60}
      nodeColor={function(e){return e.color}}
      nodeBorderWidth={1}
      nodeBorderColor={{ theme: 'background' }}
    />
  );
}

export default App;
