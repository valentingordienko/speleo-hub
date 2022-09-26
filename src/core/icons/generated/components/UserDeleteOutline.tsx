import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UserDeleteOutline.svg';

export function UserDeleteOutline(props: TProps) {
  return (
    <Icon {...props} name="UserDeleteOutline">
      <SVG />
    </Icon>
  );
}
