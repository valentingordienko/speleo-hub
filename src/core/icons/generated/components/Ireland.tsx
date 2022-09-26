import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ireland.svg';

export function Ireland(props: TProps) {
  return (
    <Icon {...props} name="Ireland">
      <SVG />
    </Icon>
  );
}
