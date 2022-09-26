import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cambodia.svg';

export function Cambodia(props: TProps) {
  return (
    <Icon {...props} name="Cambodia">
      <SVG />
    </Icon>
  );
}
