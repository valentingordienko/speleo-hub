import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartSolid.svg';

export function ChartSolid(props: TProps) {
  return (
    <Icon {...props} name="ChartSolid">
      <SVG />
    </Icon>
  );
}
