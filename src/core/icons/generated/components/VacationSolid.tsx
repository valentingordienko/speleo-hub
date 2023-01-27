import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VacationSolid.svg';

export function VacationSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="VacationSolid">
      <SVG />
    </Icon>
  );
}
