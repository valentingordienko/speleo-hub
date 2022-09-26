import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Angola.svg';

export function Angola(props: TProps) {
  return (
    <Icon {...props} name="Angola">
      <SVG />
    </Icon>
  );
}
