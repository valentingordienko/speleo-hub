import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextUnderlineOutline.svg';

export function TextUnderlineOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TextUnderlineOutline">
      <SVG />
    </Icon>
  );
}
