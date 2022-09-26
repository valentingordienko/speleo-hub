import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringFutureOutline.svg';

export function AcquiringFutureOutline(props: TProps) {
  return (
    <Icon {...props} name="AcquiringFutureOutline">
      <SVG />
    </Icon>
  );
}
