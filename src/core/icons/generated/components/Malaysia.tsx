import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malaysia.svg';

export function Malaysia(props: TProps) {
  return (
    <Icon {...props} name="Malaysia">
      <SVG />
    </Icon>
  );
}
