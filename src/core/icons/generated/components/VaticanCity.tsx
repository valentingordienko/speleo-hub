import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VaticanCity.svg';

export function VaticanCity(props: TBaseProps) {
  return (
    <Icon {...props} name="VaticanCity">
      <SVG />
    </Icon>
  );
}
