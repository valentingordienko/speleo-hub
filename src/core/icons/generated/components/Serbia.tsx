import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Serbia.svg';

export function Serbia(props: TBaseProps) {
  return (
    <Icon {...props} name="Serbia">
      <SVG />
    </Icon>
  );
}
