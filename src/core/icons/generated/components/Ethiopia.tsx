import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ethiopia.svg';

export function Ethiopia(props: TProps) {
  return (
    <Icon {...props} name="Ethiopia">
      <SVG />
    </Icon>
  );
}
