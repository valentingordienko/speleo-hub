import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Suriname.svg';

export function Suriname(props: TProps) {
  return (
    <Icon {...props} name="Suriname">
      <SVG />
    </Icon>
  );
}
