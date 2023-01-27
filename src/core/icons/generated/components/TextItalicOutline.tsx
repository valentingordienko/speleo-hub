import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextItalicOutline.svg';

export function TextItalicOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TextItalicOutline">
      <SVG />
    </Icon>
  );
}
