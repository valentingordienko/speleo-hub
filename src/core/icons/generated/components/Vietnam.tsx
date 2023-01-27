import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Vietnam.svg';

export function Vietnam(props: TBaseProps) {
  return (
    <Icon {...props} name="Vietnam">
      <SVG />
    </Icon>
  );
}
