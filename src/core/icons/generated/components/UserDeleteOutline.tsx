import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserDeleteOutline.svg';

export function UserDeleteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="UserDeleteOutline">
      <SVG />
    </Icon>
  );
}
