import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClipboardOutline.svg';

export function ClipboardOutline(props: TProps) {
  return (
    <Icon {...props} name="ClipboardOutline">
      <SVG />
    </Icon>
  );
}
