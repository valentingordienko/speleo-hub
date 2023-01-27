import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CSA.svg';

export function CSA(props: TBaseProps) {
  return (
    <Icon {...props} name="CSA">
      <SVG />
    </Icon>
  );
}
