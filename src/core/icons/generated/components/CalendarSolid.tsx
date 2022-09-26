import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarSolid.svg';

export function CalendarSolid(props: TProps) {
  return (
    <Icon {...props} name="CalendarSolid">
      <SVG />
    </Icon>
  );
}
