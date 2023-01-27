import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Venezuela.svg';

export function Venezuela(props: TBaseProps) {
  return (
    <Icon {...props} name="Venezuela">
      <SVG />
    </Icon>
  );
}
