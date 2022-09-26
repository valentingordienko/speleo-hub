import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/KeyOutline.svg';

export function KeyOutline(props: TProps) {
  return (
    <Icon {...props} name="KeyOutline">
      <SVG />
    </Icon>
  );
}
