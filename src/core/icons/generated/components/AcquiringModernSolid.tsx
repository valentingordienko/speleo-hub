import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringModernSolid.svg';

export function AcquiringModernSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AcquiringModernSolid">
      <SVG />
    </Icon>
  );
}
