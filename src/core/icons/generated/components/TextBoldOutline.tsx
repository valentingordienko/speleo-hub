import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextBoldOutline.svg';

export function TextBoldOutline(props: TProps) {
  return (
    <Icon {...props} name="TextBoldOutline">
      <SVG />
    </Icon>
  );
}
