import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddPersonOutline.svg';

export function AddPersonOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AddPersonOutline">
      <SVG />
    </Icon>
  );
}
