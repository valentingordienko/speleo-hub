import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringFutureSolid.svg';

export function AcquiringFutureSolid(props: TProps) {
  return (
    <Icon {...props} name="AcquiringFutureSolid">
      <SVG />
    </Icon>
  );
}
