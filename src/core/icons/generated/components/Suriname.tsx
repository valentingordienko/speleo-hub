import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Suriname.svg';

export function Suriname(props: TBaseProps) {
  return (
    <Icon {...props} name="Suriname">
      <SVG />
    </Icon>
  );
}
