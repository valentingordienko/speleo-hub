import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OpenShiftSolid.svg';

export function OpenShiftSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="OpenShiftSolid">
      <SVG />
    </Icon>
  );
}
