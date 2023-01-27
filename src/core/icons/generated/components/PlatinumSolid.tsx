import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlatinumSolid.svg';

export function PlatinumSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PlatinumSolid">
      <SVG />
    </Icon>
  );
}
