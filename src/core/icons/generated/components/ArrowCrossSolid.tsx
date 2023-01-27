import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArrowCrossSolid.svg';

export function ArrowCrossSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ArrowCrossSolid">
      <SVG />
    </Icon>
  );
}
