import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CSA.svg';

export function CSA(props: TProps) {
  return (
    <Icon {...props} name="CSA">
      <SVG />
    </Icon>
  );
}
