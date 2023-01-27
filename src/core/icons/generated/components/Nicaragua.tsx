import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nicaragua.svg';

export function Nicaragua(props: TBaseProps) {
  return (
    <Icon {...props} name="Nicaragua">
      <SVG />
    </Icon>
  );
}
