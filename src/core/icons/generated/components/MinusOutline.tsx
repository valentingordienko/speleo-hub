import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MinusOutline.svg';

export function MinusOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MinusOutline">
      <SVG />
    </Icon>
  );
}
