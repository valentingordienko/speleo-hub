import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcquiringFutureOutline.svg';

export function AcquiringFutureOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AcquiringFutureOutline">
      <SVG />
    </Icon>
  );
}
