import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ecuador.svg';

export function Ecuador(props: TProps) {
  return (
    <Icon {...props} name="Ecuador">
      <SVG />
    </Icon>
  );
}
