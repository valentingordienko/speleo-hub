import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOutline.svg';

export function CalendarOutline(props: TProps) {
  return (
    <Icon {...props} name="CalendarOutline">
      <SVG />
    </Icon>
  );
}
