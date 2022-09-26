import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeartSolid.svg';

export function HeartSolid(props: TProps) {
  return (
    <Icon {...props} name="HeartSolid">
      <SVG />
    </Icon>
  );
}
