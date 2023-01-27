import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SanMarino.svg';

export function SanMarino(props: TBaseProps) {
  return (
    <Icon {...props} name="SanMarino">
      <SVG />
    </Icon>
  );
}
