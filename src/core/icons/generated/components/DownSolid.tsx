import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DownSolid.svg';

export function DownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DownSolid">
      <SVG />
    </Icon>
  );
}
