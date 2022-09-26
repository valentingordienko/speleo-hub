import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Serbia.svg';

export function Serbia(props: TProps) {
  return (
    <Icon {...props} name="Serbia">
      <SVG />
    </Icon>
  );
}
