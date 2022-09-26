import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyboardOutline.svg';

export function KeyboardOutline(props: TProps) {
  return (
    <Icon {...props} name="KeyboardOutline">
      <SVG />
    </Icon>
  );
}
