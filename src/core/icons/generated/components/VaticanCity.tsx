import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VaticanCity.svg';

export function VaticanCity(props: TProps) {
  return (
    <Icon {...props} name="VaticanCity">
      <SVG />
    </Icon>
  );
}
