import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ClipboardSolid.svg';

export function ClipboardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ClipboardSolid">
      <SVG />
    </Icon>
  );
}
