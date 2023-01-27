import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Tuvalu.svg';

export function Tuvalu(props: TBaseProps) {
  return (
    <Icon {...props} name="Tuvalu">
      <SVG />
    </Icon>
  );
}
