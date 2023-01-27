import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UpDownSolid.svg';

export function UpDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="UpDownSolid">
      <SVG />
    </Icon>
  );
}
