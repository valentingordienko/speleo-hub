import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ukraine.svg';

export function Ukraine(props: TBaseProps) {
  return (
    <Icon {...props} name="Ukraine">
      <SVG />
    </Icon>
  );
}
