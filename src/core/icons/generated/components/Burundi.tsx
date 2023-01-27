import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Burundi.svg';

export function Burundi(props: TBaseProps) {
  return (
    <Icon {...props} name="Burundi">
      <SVG />
    </Icon>
  );
}
