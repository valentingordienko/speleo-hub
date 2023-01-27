import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CopyOutline.svg';

export function CopyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CopyOutline">
      <SVG />
    </Icon>
  );
}
