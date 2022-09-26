import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OpenShiftSolid.svg';

export function OpenShiftSolid(props: TProps) {
  return (
    <Icon {...props} name="OpenShiftSolid">
      <SVG />
    </Icon>
  );
}
