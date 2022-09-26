import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nicaragua.svg';

export function Nicaragua(props: TProps) {
  return (
    <Icon {...props} name="Nicaragua">
      <SVG />
    </Icon>
  );
}
