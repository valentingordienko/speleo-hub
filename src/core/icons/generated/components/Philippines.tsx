import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Philippines.svg';

export function Philippines(props: TProps) {
  return (
    <Icon {...props} name="Philippines">
      <SVG />
    </Icon>
  );
}
