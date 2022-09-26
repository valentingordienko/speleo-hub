import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Gabon.svg';

export function Gabon(props: TProps) {
  return (
    <Icon {...props} name="Gabon">
      <SVG />
    </Icon>
  );
}
