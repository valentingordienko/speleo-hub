import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Switzerland.svg';

export function Switzerland(props: TBaseProps) {
  return (
    <Icon {...props} name="Switzerland">
      <SVG />
    </Icon>
  );
}
