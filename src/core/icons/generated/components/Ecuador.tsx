import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ecuador.svg';

export function Ecuador(props: TBaseProps) {
  return (
    <Icon {...props} name="Ecuador">
      <SVG />
    </Icon>
  );
}
