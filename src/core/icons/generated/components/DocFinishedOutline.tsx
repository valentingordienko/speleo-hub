import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocFinishedOutline.svg';

export function DocFinishedOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocFinishedOutline">
      <SVG />
    </Icon>
  );
}
