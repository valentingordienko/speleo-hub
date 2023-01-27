import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnitedStatesOfAmerica.svg';

export function UnitedStatesOfAmerica(props: TBaseProps) {
  return (
    <Icon {...props} name="UnitedStatesOfAmerica">
      <SVG />
    </Icon>
  );
}
