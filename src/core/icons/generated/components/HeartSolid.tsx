import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeartSolid.svg';

export function HeartSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="HeartSolid">
      <SVG />
    </Icon>
  );
}
