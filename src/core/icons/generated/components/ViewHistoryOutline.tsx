import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ViewHistoryOutline.svg';

export function ViewHistoryOutline(props: TProps) {
  return (
    <Icon {...props} name="ViewHistoryOutline">
      <SVG />
    </Icon>
  );
}
