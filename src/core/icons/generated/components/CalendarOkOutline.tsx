import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOkOutline.svg';

export function CalendarOkOutline(props: TProps) {
  return (
    <Icon {...props} name="CalendarOkOutline">
      <SVG />
    </Icon>
  );
}
