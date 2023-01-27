import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DebitCardOutline.svg';

export function DebitCardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DebitCardOutline">
      <SVG />
    </Icon>
  );
}
