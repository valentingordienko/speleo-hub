import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Honduras.svg';

export function Honduras(props: TBaseProps) {
  return (
    <Icon {...props} name="Honduras">
      <SVG />
    </Icon>
  );
}
