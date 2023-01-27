import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GBPSolid.svg';

export function GBPSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GBPSolid">
      <SVG />
    </Icon>
  );
}
