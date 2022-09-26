import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocFinishedOutline.svg';

export function DocFinishedOutline(props: TProps) {
  return (
    <Icon {...props} name="DocFinishedOutline">
      <SVG />
    </Icon>
  );
}
