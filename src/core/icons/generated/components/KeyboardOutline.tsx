import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyboardOutline.svg';

export function KeyboardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="KeyboardOutline">
      <SVG />
    </Icon>
  );
}
