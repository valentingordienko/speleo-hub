import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarSolid.svg';

export function CalendarSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CalendarSolid">
      <SVG />
    </Icon>
  );
}
