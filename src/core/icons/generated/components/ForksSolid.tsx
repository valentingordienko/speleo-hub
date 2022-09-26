import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ForksSolid.svg';

export function ForksSolid(props: TProps) {
  return (
    <Icon {...props} name="ForksSolid">
      <SVG />
    </Icon>
  );
}
