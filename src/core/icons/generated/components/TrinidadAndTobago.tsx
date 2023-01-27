import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TrinidadAndTobago.svg';

export function TrinidadAndTobago(props: TBaseProps) {
  return (
    <Icon {...props} name="TrinidadAndTobago">
      <SVG />
    </Icon>
  );
}
