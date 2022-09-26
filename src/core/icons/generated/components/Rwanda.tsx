import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Rwanda.svg';

export function Rwanda(props: TProps) {
  return (
    <Icon {...props} name="Rwanda">
      <SVG />
    </Icon>
  );
}
