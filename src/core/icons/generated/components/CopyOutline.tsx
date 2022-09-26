import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CopyOutline.svg';

export function CopyOutline(props: TProps) {
  return (
    <Icon {...props} name="CopyOutline">
      <SVG />
    </Icon>
  );
}
