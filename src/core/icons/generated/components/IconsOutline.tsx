import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IconsOutline.svg';

export function IconsOutline(props: TProps) {
  return (
    <Icon {...props} name="IconsOutline">
      <SVG />
    </Icon>
  );
}
