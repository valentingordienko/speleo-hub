import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Monaco.svg';

export function Monaco(props: TProps) {
  return (
    <Icon {...props} name="Monaco">
      <SVG />
    </Icon>
  );
}
