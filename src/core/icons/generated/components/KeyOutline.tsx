import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyOutline.svg';

export function KeyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="KeyOutline">
      <SVG />
    </Icon>
  );
}
