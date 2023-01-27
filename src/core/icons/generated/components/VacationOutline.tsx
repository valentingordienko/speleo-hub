import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VacationOutline.svg';

export function VacationOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="VacationOutline">
      <SVG />
    </Icon>
  );
}
