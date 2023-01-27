import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FontStyleOutline.svg';

export function FontStyleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FontStyleOutline">
      <SVG />
    </Icon>
  );
}
