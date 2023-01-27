import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Belarus.svg';

export function Belarus(props: TBaseProps) {
  return (
    <Icon {...props} name="Belarus">
      <SVG />
    </Icon>
  );
}
