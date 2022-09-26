import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ElementFixedOutline.svg';

export function ElementFixedOutline(props: TProps) {
  return (
    <Icon {...props} name="ElementFixedOutline">
      <SVG />
    </Icon>
  );
}
