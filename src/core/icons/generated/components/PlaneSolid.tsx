import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaneSolid.svg';

export function PlaneSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PlaneSolid">
      <SVG />
    </Icon>
  );
}
