import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlatinumSolid.svg';

export function PlatinumSolid(props: TProps) {
  return (
    <Icon {...props} name="PlatinumSolid">
      <SVG />
    </Icon>
  );
}
