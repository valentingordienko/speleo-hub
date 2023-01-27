import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malaysia.svg';

export function Malaysia(props: TBaseProps) {
  return (
    <Icon {...props} name="Malaysia">
      <SVG />
    </Icon>
  );
}
