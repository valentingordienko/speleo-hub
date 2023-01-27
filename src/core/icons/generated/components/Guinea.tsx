import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guinea.svg';

export function Guinea(props: TBaseProps) {
  return (
    <Icon {...props} name="Guinea">
      <SVG />
    </Icon>
  );
}
