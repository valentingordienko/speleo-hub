import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ForksSolid.svg';

export function ForksSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ForksSolid">
      <SVG />
    </Icon>
  );
}
