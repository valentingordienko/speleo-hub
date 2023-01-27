import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bulgaria.svg';

export function Bulgaria(props: TBaseProps) {
  return (
    <Icon {...props} name="Bulgaria">
      <SVG />
    </Icon>
  );
}
