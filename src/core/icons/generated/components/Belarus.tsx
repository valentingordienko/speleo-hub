import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belarus.svg';

export function Belarus(props: TProps) {
  return (
    <Icon {...props} name="Belarus">
      <SVG />
    </Icon>
  );
}
