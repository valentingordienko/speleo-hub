import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DebitCardOutline.svg';

export function DebitCardOutline(props: TProps) {
  return (
    <Icon {...props} name="DebitCardOutline">
      <SVG />
    </Icon>
  );
}
