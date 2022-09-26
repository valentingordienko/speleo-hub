import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOkSolid.svg';

export function CalendarOkSolid(props: TProps) {
  return (
    <Icon {...props} name="CalendarOkSolid">
      <SVG />
    </Icon>
  );
}
