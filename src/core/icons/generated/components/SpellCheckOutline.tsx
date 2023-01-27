import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SpellCheckOutline.svg';

export function SpellCheckOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SpellCheckOutline">
      <SVG />
    </Icon>
  );
}
