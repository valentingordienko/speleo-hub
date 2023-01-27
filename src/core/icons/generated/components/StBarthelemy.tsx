import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StBarthelemy.svg';

export function StBarthelemy(props: TBaseProps) {
  return (
    <Icon {...props} name="StBarthelemy">
      <SVG />
    </Icon>
  );
}
