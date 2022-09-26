import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Slovakia.svg';

export function Slovakia(props: TProps) {
  return (
    <Icon {...props} name="Slovakia">
      <SVG />
    </Icon>
  );
}
