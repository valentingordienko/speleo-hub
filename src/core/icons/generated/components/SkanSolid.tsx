import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SkanSolid.svg';

export function SkanSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SkanSolid">
      <SVG />
    </Icon>
  );
}
