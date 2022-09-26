import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteOutline.svg';

export function DeleteOutline(props: TProps) {
  return (
    <Icon {...props} name="DeleteOutline">
      <SVG />
    </Icon>
  );
}
