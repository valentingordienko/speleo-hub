import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOutline.svg';

export function CalendarOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CalendarOutline">
      <SVG />
    </Icon>
  );
}
