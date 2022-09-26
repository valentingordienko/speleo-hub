import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UpDownSolid.svg';

export function UpDownSolid(props: TProps) {
  return (
    <Icon {...props} name="UpDownSolid">
      <SVG />
    </Icon>
  );
}
