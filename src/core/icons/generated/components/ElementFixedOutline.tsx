import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ElementFixedOutline.svg';

export function ElementFixedOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ElementFixedOutline">
      <SVG />
    </Icon>
  );
}
