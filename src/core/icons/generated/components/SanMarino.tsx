import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SanMarino.svg';

export function SanMarino(props: TProps) {
  return (
    <Icon {...props} name="SanMarino">
      <SVG />
    </Icon>
  );
}
