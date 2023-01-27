import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Philippines.svg';

export function Philippines(props: TBaseProps) {
  return (
    <Icon {...props} name="Philippines">
      <SVG />
    </Icon>
  );
}
