import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gabon.svg';

export function Gabon(props: TBaseProps) {
  return (
    <Icon {...props} name="Gabon">
      <SVG />
    </Icon>
  );
}
