import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bulgaria.svg';

export function Bulgaria(props: TProps) {
  return (
    <Icon {...props} name="Bulgaria">
      <SVG />
    </Icon>
  );
}
