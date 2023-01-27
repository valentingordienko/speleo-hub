import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringFutureSolid.svg';

export function AcquiringFutureSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AcquiringFutureSolid">
      <SVG />
    </Icon>
  );
}
