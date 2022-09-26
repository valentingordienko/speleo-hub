import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Finland.svg';

export function Finland(props: TProps) {
  return (
    <Icon {...props} name="Finland">
      <SVG />
    </Icon>
  );
}
