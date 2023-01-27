import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ethiopia.svg';

export function Ethiopia(props: TBaseProps) {
  return (
    <Icon {...props} name="Ethiopia">
      <SVG />
    </Icon>
  );
}
