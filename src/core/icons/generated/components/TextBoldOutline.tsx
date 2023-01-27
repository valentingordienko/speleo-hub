import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TextBoldOutline.svg';

export function TextBoldOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TextBoldOutline">
      <SVG />
    </Icon>
  );
}
