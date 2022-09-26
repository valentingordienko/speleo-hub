import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Finance.svg';

export function Finance(props: TProps) {
  return (
    <Icon {...props} name="Finance">
      <SVG />
    </Icon>
  );
}
