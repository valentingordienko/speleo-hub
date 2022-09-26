import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextItalicOutline.svg';

export function TextItalicOutline(props: TProps) {
  return (
    <Icon {...props} name="TextItalicOutline">
      <SVG />
    </Icon>
  );
}
