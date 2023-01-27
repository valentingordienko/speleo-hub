import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Singapore.svg';

export function Singapore(props: TBaseProps) {
  return (
    <Icon {...props} name="Singapore">
      <SVG />
    </Icon>
  );
}
