import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddPersonOutline.svg';

export function AddPersonOutline(props: TProps) {
  return (
    <Icon {...props} name="AddPersonOutline">
      <SVG />
    </Icon>
  );
}
