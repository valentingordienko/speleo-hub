import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Singapore.svg';

export function Singapore(props: TProps) {
  return (
    <Icon {...props} name="Singapore">
      <SVG />
    </Icon>
  );
}
