import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ireland.svg';

export function Ireland(props: TBaseProps) {
  return (
    <Icon {...props} name="Ireland">
      <SVG />
    </Icon>
  );
}
