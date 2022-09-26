import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StBarthelemy.svg';

export function StBarthelemy(props: TProps) {
  return (
    <Icon {...props} name="StBarthelemy">
      <SVG />
    </Icon>
  );
}
