import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Madagascar.svg';

export function Madagascar(props: TBaseProps) {
  return (
    <Icon {...props} name="Madagascar">
      <SVG />
    </Icon>
  );
}
