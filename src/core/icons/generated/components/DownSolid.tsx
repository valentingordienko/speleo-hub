import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownSolid.svg';

export function DownSolid(props: TProps) {
  return (
    <Icon {...props} name="DownSolid">
      <SVG />
    </Icon>
  );
}
