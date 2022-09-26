import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tuvalu.svg';

export function Tuvalu(props: TProps) {
  return (
    <Icon {...props} name="Tuvalu">
      <SVG />
    </Icon>
  );
}
