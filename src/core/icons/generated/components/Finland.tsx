import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Finland.svg';

export function Finland(props: TBaseProps) {
  return (
    <Icon {...props} name="Finland">
      <SVG />
    </Icon>
  );
}
