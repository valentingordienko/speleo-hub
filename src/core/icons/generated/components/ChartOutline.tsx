import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartOutline.svg';

export function ChartOutline(props: TProps) {
  return (
    <Icon {...props} name="ChartOutline">
      <SVG />
    </Icon>
  );
}
