import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SkanSolid.svg';

export function SkanSolid(props: TProps) {
  return (
    <Icon {...props} name="SkanSolid">
      <SVG />
    </Icon>
  );
}
