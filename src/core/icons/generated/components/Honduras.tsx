import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Honduras.svg';

export function Honduras(props: TProps) {
  return (
    <Icon {...props} name="Honduras">
      <SVG />
    </Icon>
  );
}
