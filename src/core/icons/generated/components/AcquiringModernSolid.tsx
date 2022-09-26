import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringModernSolid.svg';

export function AcquiringModernSolid(props: TProps) {
  return (
    <Icon {...props} name="AcquiringModernSolid">
      <SVG />
    </Icon>
  );
}
