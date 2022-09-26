import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowCrossSolid.svg';

export function ArrowCrossSolid(props: TProps) {
  return (
    <Icon {...props} name="ArrowCrossSolid">
      <SVG />
    </Icon>
  );
}
