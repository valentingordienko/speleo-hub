import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Madagascar.svg';

export function Madagascar(props: TProps) {
  return (
    <Icon {...props} name="Madagascar">
      <SVG />
    </Icon>
  );
}
