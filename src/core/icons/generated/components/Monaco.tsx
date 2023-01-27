import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Monaco.svg';

export function Monaco(props: TBaseProps) {
  return (
    <Icon {...props} name="Monaco">
      <SVG />
    </Icon>
  );
}
