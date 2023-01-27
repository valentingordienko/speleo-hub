import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ViewHistoryOutline.svg';

export function ViewHistoryOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ViewHistoryOutline">
      <SVG />
    </Icon>
  );
}
