import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EmailReadOutline.svg';

export function EmailReadOutline(props: TProps) {
  return (
    <Icon {...props} name="EmailReadOutline">
      <SVG />
    </Icon>
  );
}
