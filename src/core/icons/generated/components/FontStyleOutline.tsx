import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FontStyleOutline.svg';

export function FontStyleOutline(props: TProps) {
  return (
    <Icon {...props} name="FontStyleOutline">
      <SVG />
    </Icon>
  );
}
