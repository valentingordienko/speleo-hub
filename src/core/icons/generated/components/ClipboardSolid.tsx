import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClipboardSolid.svg';

export function ClipboardSolid(props: TProps) {
  return (
    <Icon {...props} name="ClipboardSolid">
      <SVG />
    </Icon>
  );
}
