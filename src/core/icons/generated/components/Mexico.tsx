import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Mexico.svg';

export function Mexico(props: TBaseProps) {
  return (
    <Icon {...props} name="Mexico">
      <SVG />
    </Icon>
  );
}
