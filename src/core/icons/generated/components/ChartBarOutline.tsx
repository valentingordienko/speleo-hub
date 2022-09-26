import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChartBarOutline.svg';

export function ChartBarOutline(props: TProps) {
  return (
    <Icon {...props} name="ChartBarOutline">
      <SVG />
    </Icon>
  );
}
