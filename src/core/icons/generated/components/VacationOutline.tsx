import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VacationOutline.svg';

export function VacationOutline(props: TProps) {
  return (
    <Icon {...props} name="VacationOutline">
      <SVG />
    </Icon>
  );
}
