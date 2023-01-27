import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Angola.svg';

export function Angola(props: TBaseProps) {
  return (
    <Icon {...props} name="Angola">
      <SVG />
    </Icon>
  );
}
