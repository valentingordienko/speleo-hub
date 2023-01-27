import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalendarOkOutline.svg';

export function CalendarOkOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CalendarOkOutline">
      <SVG />
    </Icon>
  );
}
