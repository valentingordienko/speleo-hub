import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Kazakhstan.svg';

export function Kazakhstan(props: TBaseProps) {
  return (
    <Icon {...props} name="Kazakhstan">
      <SVG />
    </Icon>
  );
}
