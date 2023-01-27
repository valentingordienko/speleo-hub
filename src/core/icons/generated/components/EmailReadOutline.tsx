import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EmailReadOutline.svg';

export function EmailReadOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EmailReadOutline">
      <SVG />
    </Icon>
  );
}
