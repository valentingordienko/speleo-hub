import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnitedStatesOfAmerica.svg';

export function UnitedStatesOfAmerica(props: TProps) {
  return (
    <Icon {...props} name="UnitedStatesOfAmerica">
      <SVG />
    </Icon>
  );
}
