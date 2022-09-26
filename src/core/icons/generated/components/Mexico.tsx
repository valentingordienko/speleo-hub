import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mexico.svg';

export function Mexico(props: TProps) {
  return (
    <Icon {...props} name="Mexico">
      <SVG />
    </Icon>
  );
}
