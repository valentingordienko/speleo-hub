import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IconsOutline.svg';

export function IconsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="IconsOutline">
      <SVG />
    </Icon>
  );
}
