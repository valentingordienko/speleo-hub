import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Slovakia.svg';

export function Slovakia(props: TBaseProps) {
  return (
    <Icon {...props} name="Slovakia">
      <SVG />
    </Icon>
  );
}
