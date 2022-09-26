import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SpellCheckOutline.svg';

export function SpellCheckOutline(props: TProps) {
  return (
    <Icon {...props} name="SpellCheckOutline">
      <SVG />
    </Icon>
  );
}
