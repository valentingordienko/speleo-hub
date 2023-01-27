import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClipboardOutline.svg';

export function ClipboardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ClipboardOutline">
      <SVG />
    </Icon>
  );
}
