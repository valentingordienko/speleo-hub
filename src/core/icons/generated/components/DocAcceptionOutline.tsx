import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAcceptionOutline.svg';

export function DocAcceptionOutline(props: TProps) {
  return (
    <Icon {...props} name="DocAcceptionOutline">
      <SVG />
    </Icon>
  );
}
