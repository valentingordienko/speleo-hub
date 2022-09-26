import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Burundi.svg';

export function Burundi(props: TProps) {
  return (
    <Icon {...props} name="Burundi">
      <SVG />
    </Icon>
  );
}
