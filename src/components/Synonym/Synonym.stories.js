import React from 'react';
import Synonym from './';

export default { title: 'Synonym Name' };

export const withName = () => (
  <Synonym currentName="Oscillatoria tenuis">
    Phormidium limosum
  </Synonym>
);