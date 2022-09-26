import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextUnderlineOutline.svg';

export function TextUnderlineOutline(props: TProps) {
  return (
    <Icon {...props} name="TextUnderlineOutline">
      <SVG />
    </Icon>
  );
}
