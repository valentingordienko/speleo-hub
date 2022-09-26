import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ukraine.svg';

export function Ukraine(props: TProps) {
  return (
    <Icon {...props} name="Ukraine">
      <SVG />
    </Icon>
  );
}
