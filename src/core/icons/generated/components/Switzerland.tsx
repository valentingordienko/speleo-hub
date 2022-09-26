import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Switzerland.svg';

export function Switzerland(props: TProps) {
  return (
    <Icon {...props} name="Switzerland">
      <SVG />
    </Icon>
  );
}
