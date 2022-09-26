import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GBPSolid.svg';

export function GBPSolid(props: TProps) {
  return (
    <Icon {...props} name="GBPSolid">
      <SVG />
    </Icon>
  );
}
