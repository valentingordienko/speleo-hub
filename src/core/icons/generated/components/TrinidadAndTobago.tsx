import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrinidadAndTobago.svg';

export function TrinidadAndTobago(props: TProps) {
  return (
    <Icon {...props} name="TrinidadAndTobago">
      <SVG />
    </Icon>
  );
}
