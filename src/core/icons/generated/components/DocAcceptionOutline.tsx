import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAcceptionOutline.svg';

export function DocAcceptionOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocAcceptionOutline">
      <SVG />
    </Icon>
  );
}
