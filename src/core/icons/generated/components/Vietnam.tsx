import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Vietnam.svg';

export function Vietnam(props: TProps) {
  return (
    <Icon {...props} name="Vietnam">
      <SVG />
    </Icon>
  );
}
