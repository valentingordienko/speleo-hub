import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOkSolid.svg';

export function CalendarOkSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CalendarOkSolid">
      <SVG />
    </Icon>
  );
}
