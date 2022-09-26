import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocViewOutline.svg';

export function DocViewOutline(props: TProps) {
  return (
    <Icon {...props} name="DocViewOutline">
      <SVG />
    </Icon>
  );
}
