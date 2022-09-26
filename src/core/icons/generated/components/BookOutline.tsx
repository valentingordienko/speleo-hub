import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BookOutline.svg';

export function BookOutline(props: TProps) {
  return (
    <Icon {...props} name="BookOutline">
      <SVG />
    </Icon>
  );
}
