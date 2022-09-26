import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kazakhstan.svg';

export function Kazakhstan(props: TProps) {
  return (
    <Icon {...props} name="Kazakhstan">
      <SVG />
    </Icon>
  );
}
