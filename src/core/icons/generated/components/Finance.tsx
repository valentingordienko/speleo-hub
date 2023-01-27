import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Finance.svg';

export function Finance(props: TBaseProps) {
  return (
    <Icon {...props} name="Finance">
      <SVG />
    </Icon>
  );
}
