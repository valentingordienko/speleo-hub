import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Rwanda.svg';

export function Rwanda(props: TBaseProps) {
  return (
    <Icon {...props} name="Rwanda">
      <SVG />
    </Icon>
  );
}
