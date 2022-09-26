import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaneSolid.svg';

export function PlaneSolid(props: TProps) {
  return (
    <Icon {...props} name="PlaneSolid">
      <SVG />
    </Icon>
  );
}
