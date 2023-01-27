import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cambodia.svg';

export function Cambodia(props: TBaseProps) {
  return (
    <Icon {...props} name="Cambodia">
      <SVG />
    </Icon>
  );
}
