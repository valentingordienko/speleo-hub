import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VacationSolid.svg';

export function VacationSolid(props: TProps) {
  return (
    <Icon {...props} name="VacationSolid">
      <SVG />
    </Icon>
  );
}
